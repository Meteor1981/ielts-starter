# 部署到腾讯云 COS（国内访问最快）

## 第一步：注册腾讯云并创建存储桶（5分钟）

1. 打开 https://console.cloud.tencent.com/cos
2. 登录/注册腾讯云账号（可以用微信扫码）
3. 点击 **创建存储桶**
   - 名称：`ielts-starter`
   - 地域：选离你最近的，如**广州** `ap-guangzhou`
   - 访问权限：**公有读私有写**
   - 点击**确定**

## 第二步：开启静态网站功能

1. 进入刚创建的存储桶
2. 左侧菜单点击 **基础配置** → **静态网站**
3. 开启静态网站
   - 索引文档：`index.html`
   - 错误文档：`index.html`
4. 点击 **保存**

## 第三步：获取 API 密钥

1. 打开 https://console.cloud.tencent.com/cam/capi
2. 点击 **新建密钥**
3. 复制 **SecretId** 和 **SecretKey**（只显示一次，请保存好）

## 第四步：上传文件

### 方式 A：用脚本自动上传（推荐）

1. 安装依赖：
   ```bash
   pip install cos-python-sdk-v5
   ```

2. 修改 `upload_to_cos.py` 里的配置：
   ```python
   SECRET_ID = '你的SecretId'
   SECRET_KEY = '你的SecretKey'
   REGION = 'ap-guangzhou'  # 你选的地域
   BUCKET = 'ielts-starter-你的appid'  # 存储桶名称
   ```

   > `BUCKET` 的格式是 `名称-APPID`，在存储桶详情页能看到完整名称。

3. 运行上传：
   ```bash
   python deploy/upload_to_cos.py
   ```

### 方式 B：手动上传（更简单）

1. 在存储桶页面点击 **上传文件**
2. 把这些文件上传上去（保持目录结构）：
   ```
   index.html
   manifest.json
   sw.js
   css/style.css
   js/app.js
   ```
3. 点击 **上传**

## 第五步：访问你的网站

上传完成后，你的地址是：
```
http://ielts-starter-[你的appid].cos-website.ap-guangzhou.myqcloud.com
```

在存储桶的 **静态网站** 配置页能看到完整地址。

## （可选）绑定自己的域名

1. 购买一个域名（如阿里云、腾讯云）
2. 在存储桶的 **域名管理** 中添加自定义域名
3. 按提示添加 CNAME 解析
4. 开启 HTTPS（免费申请 SSL 证书）

完成后就是 `https://你的域名.com`，永久可用。
