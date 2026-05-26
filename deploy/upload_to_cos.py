#!/usr/bin/env python3
"""
一键上传到腾讯云 COS 静态网站
用法:
1. 安装依赖: pip install cos-python-sdk-v5
2. 修改下面的配置信息
3. 运行: python upload_to_cos.py
"""

import os
import sys

# ========== 修改这里的配置 ==========
SECRET_ID = '你的SecretId'       # 从 https://console.cloud.tencent.com/cam/capi 获取
SECRET_KEY = '你的SecretKey'     # 同上
REGION = 'ap-guangzhou'          # 存储桶地域，如 ap-beijing, ap-shanghai
BUCKET = 'ielts-starter-你的appid'  # 存储桶名称，格式: bucketname-appid
# ===================================

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

files_to_upload = [
    ('index.html', 'text/html'),
    ('manifest.json', 'application/json'),
    ('sw.js', 'application/javascript'),
    ('css/style.css', 'text/css'),
    ('js/app.js', 'application/javascript'),
]


def upload():
    try:
        from qcloud_cos import CosConfig, CosS3Client
    except ImportError:
        print("请先安装腾讯云 COS SDK:")
        print("  pip install cos-python-sdk-v5")
        sys.exit(1)

    if SECRET_ID.startswith('你的'):
        print("错误: 请先修改脚本中的 SECRET_ID 和 SECRET_KEY")
        print("获取方式: https://console.cloud.tencent.com/cam/capi")
        sys.exit(1)

    config = CosConfig(Region=REGION, SecretId=SECRET_ID, SecretKey=SECRET_KEY)
    client = CosS3Client(config)

    print(f"开始上传到存储桶: {BUCKET}")
    for filepath, content_type in files_to_upload:
        local_path = os.path.join(BASE_DIR, filepath)
        if not os.path.exists(local_path):
            print(f"  跳过 (不存在): {filepath}")
            continue

        key = filepath  # 上传路径保持目录结构
        client.upload_file(
            Bucket=BUCKET,
            LocalFilePath=local_path,
            Key=key,
            PartSize=1,
            MAXThread=1,
            ContentType=content_type,
        )
        print(f"  上传成功: {filepath}")

    print("\n上传完成！")
    print(f"访问地址: http://{BUCKET}.cos-website.{REGION}.myqcloud.com")
    print(f"或如果你绑定了自定义域名: https://你的域名")


if __name__ == '__main__':
    upload()
