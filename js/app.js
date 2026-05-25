// ============ 数据 ============

const vocabulary = [
    { word: "accommodation", phonetic: "/əˌkɒməˈdeɪʃn/", meaning: "n. 住处，住宿", example: "The price includes accommodation and meals.", exampleCn: "价格包含食宿。" },
    { word: "application", phonetic: "/ˌæplɪˈkeɪʃn/", meaning: "n. 申请，应用", example: "I submitted my application to three universities.", exampleCn: "我向三所大学提交了申请。" },
    { word: "appointment", phonetic: "/əˈpɔɪntmənt/", meaning: "n. 约会，预约", example: "I have a dentist appointment at 3 pm.", exampleCn: "我下午3点有个牙医预约。" },
    { word: "atmosphere", phonetic: "/ˈætməsfɪə(r)/", meaning: "n. 气氛，大气", example: "The restaurant has a romantic atmosphere.", exampleCn: "这家餐厅有浪漫的气氛。" },
    { word: "behavior", phonetic: "/bɪˈheɪvjə(r)/", meaning: "n. 行为，举止", example: "Good behavior is expected in the classroom.", exampleCn: "课堂上要求举止良好。" },
    { word: "benefit", phonetic: "/ˈbenɪfɪt/", meaning: "n./v. 好处，受益", example: "Regular exercise has many health benefits.", exampleCn: "定期锻炼有很多健康益处。" },
    { word: "campaign", phonetic: "/kæmˈpeɪn/", meaning: "n. 活动，运动", example: "The government launched a recycling campaign.", exampleCn: "政府发起了一场回收运动。" },
    { word: "challenge", phonetic: "/ˈtʃælɪndʒ/", meaning: "n./v. 挑战", example: "Learning a new language is a big challenge.", exampleCn: "学一门新语言是个大挑战。" },
    { word: "communication", phonetic: "/kəˌmjuːnɪˈkeɪʃn/", meaning: "n. 交流，通讯", example: "Good communication is key to teamwork.", exampleCn: "良好的沟通是团队合作的关键。" },
    { word: "community", phonetic: "/kəˈmjuːnəti/", meaning: "n. 社区，群体", example: "She is active in the local community.", exampleCn: "她在当地社区很活跃。" },
    { word: "complaint", phonetic: "/kəmˈpleɪnt/", meaning: "n. 投诉，抱怨", example: "I want to make a complaint about the service.", exampleCn: "我想对服务提出投诉。" },
    { word: "condition", phonetic: "/kənˈdɪʃn/", meaning: "n. 条件，状况", example: "The house is in excellent condition.", exampleCn: "这房子状况极佳。" },
    { word: "consequence", phonetic: "/ˈkɒnsɪkwəns/", meaning: "n. 结果，后果", example: "He faced serious consequences for his actions.", exampleCn: "他的行为面临严重后果。" },
    { word: "construction", phonetic: "/kənˈstrʌkʃn/", meaning: "n. 建设，建造", example: "The construction of the bridge took two years.", exampleCn: "这座桥的建设花了两年时间。" },
    { word: "contribution", phonetic: "/ˌkɒntrɪˈbjuːʃn/", meaning: "n. 贡献，捐款", example: "Everyone made a contribution to the project.", exampleCn: "每个人都为项目做出了贡献。" },
    { word: "convenient", phonetic: "/kənˈviːniənt/", meaning: "adj. 方便的", example: "Online shopping is very convenient.", exampleCn: "网购非常方便。" },
    { word: "culture", phonetic: "/ˈkʌltʃə(r)/", meaning: "n. 文化，文明", example: "I love learning about different cultures.", exampleCn: "我喜欢了解不同的文化。" },
    { word: "customer", phonetic: "/ˈkʌstəmə(r)/", meaning: "n. 顾客，客户", example: "The customer was satisfied with the product.", exampleCn: "顾客对产品很满意。" },
    { word: "damage", phonetic: "/ˈdæmɪdʒ/", meaning: "n./v. 损害，损坏", example: "The storm caused serious damage to the crops.", exampleCn: "暴风雨对庄稼造成严重损害。" },
    { word: "debate", phonetic: "/dɪˈbeɪt/", meaning: "n./v. 辩论，讨论", example: "We had a heated debate about climate change.", exampleCn: "我们就气候变化进行了激烈辩论。" },
    { word: "decision", phonetic: "/dɪˈsɪʒn/", meaning: "n. 决定，决策", example: "Moving abroad was a big decision for me.", exampleCn: "出国对我来说是个重大决定。" },
    { word: "decline", phonetic: "/dɪˈklaɪn/", meaning: "v./n. 下降，衰退；婉拒", example: "The number of smokers has declined sharply.", exampleCn: "吸烟者人数急剧下降。" },
    { word: "demonstrate", phonetic: "/ˈdemənstreɪt/", meaning: "v. 展示，证明", example: "The teacher demonstrated how to solve the problem.", exampleCn: "老师演示了如何解决问题。" },
    { word: "description", phonetic: "/dɪˈskrɪpʃn/", meaning: "n. 描述，描写", example: "Can you give me a description of the man?", exampleCn: "你能给我描述一下那个男人吗？" },
    { word: "development", phonetic: "/dɪˈveləpmənt/", meaning: "n. 发展，开发", example: "The city has seen rapid development.", exampleCn: "这座城市发展迅速。" },
    { word: "device", phonetic: "/dɪˈvaɪs/", meaning: "n. 设备，装置", example: "Smartphones are the most popular mobile device.", exampleCn: "智能手机是最受欢迎的移动设备。" },
    { word: "disadvantage", phonetic: "/ˌdɪsədˈvɑːntɪdʒ/", meaning: "n. 缺点，不利条件", example: "The main disadvantage is the high cost.", exampleCn: "主要缺点是成本高。" },
    { word: "discover", phonetic: "/dɪˈskʌvə(r)/", meaning: "v. 发现，发觉", example: "Scientists discovered a new species of fish.", exampleCn: "科学家们发现了一种新鱼类。" },
    { word: "discussion", phonetic: "/dɪˈskʌʃn/", meaning: "n. 讨论，商议", example: "We had a long discussion about the plan.", exampleCn: "我们就这个计划进行了长时间讨论。" },
    { word: "distance", phonetic: "/ˈdɪstəns/", meaning: "n. 距离，远方", example: "The school is a short distance from my home.", exampleCn: "学校离我家很近。" },
    { word: "document", phonetic: "/ˈdɒkjumənt/", meaning: "n. 文件，文档", example: "Please bring your identity document.", exampleCn: "请带上你的身份证明文件。" },
    { word: "economy", phonetic: "/ɪˈkɒnəmi/", meaning: "n. 经济，节约", example: "Tourism is important to the local economy.", exampleCn: "旅游业对当地经济很重要。" },
    { word: "education", phonetic: "/ˌedʒuˈkeɪʃn/", meaning: "n. 教育，培养", example: "Education is the key to success.", exampleCn: "教育是成功的关键。" },
    { word: "effect", phonetic: "/ɪˈfekt/", meaning: "n. 影响，效果", example: "The medicine had an immediate effect.", exampleCn: "药物立即见效。" },
    { word: "efficient", phonetic: "/ɪˈfɪʃnt/", meaning: "adj. 高效的，有效率的", example: "This machine is very energy efficient.", exampleCn: "这台机器非常节能高效。" },
    { word: "effort", phonetic: "/ˈefət/", meaning: "n. 努力，尝试", example: "Success requires hard work and effort.", exampleCn: "成功需要努力和付出。" },
    { word: "environment", phonetic: "/ɪnˈvaɪrənmənt/", meaning: "n. 环境，自然环境", example: "We must protect the environment.", exampleCn: "我们必须保护环境。" },
    { word: "equipment", phonetic: "/ɪˈkwɪpmənt/", meaning: "n. 设备，器材", example: "The gym has modern equipment.", exampleCn: "健身房有现代化器材。" },
    { word: "establish", phonetic: "/ɪˈstæblɪʃ/", meaning: "v. 建立，创立", example: "The company was established in 1995.", exampleCn: "这家公司成立于1995年。" },
    { word: "estimate", phonetic: "/ˈestɪmət/", meaning: "v./n. 估计，估算", example: "I estimate the cost at about $500.", exampleCn: "我估计费用大约500美元。" },
    { word: "evaluate", phonetic: "/ɪˈvæljueɪt/", meaning: "v. 评估，评价", example: "We need to evaluate the results carefully.", exampleCn: "我们需要仔细评估结果。" },
    { word: "evidence", phonetic: "/ˈevɪdəns/", meaning: "n. 证据，证明", example: "There is no evidence to support this theory.", exampleCn: "没有证据支持这个理论。" },
    { word: "exchange", phonetic: "/ɪksˈtʃeɪndʒ/", meaning: "v./n. 交换，交流", example: "I went on a student exchange program.", exampleCn: "我参加了一个学生交换项目。" },
    { word: "experience", phonetic: "/ɪkˈspɪəriəns/", meaning: "n./v. 经验，经历", example: "She has five years of work experience.", exampleCn: "她有五年工作经验。" },
    { word: "experiment", phonetic: "/ɪkˈsperɪmənt/", meaning: "n. 实验，试验", example: "The experiment proved the theory.", exampleCn: "这个实验证实了该理论。" },
    { word: "expert", phonetic: "/ˈekspɜːt/", meaning: "n./adj. 专家，熟练的", example: "He is an expert in computer science.", exampleCn: "他是计算机科学专家。" },
    { word: "explanation", phonetic: "/ˌekspləˈneɪʃn/", meaning: "n. 解释，说明", example: "Can you give me an explanation for this?", exampleCn: "你能给我解释一下这个吗？" },
    { word: "express", phonetic: "/ɪkˈspres/", meaning: "v. 表达，表示", example: "It is hard to express my feelings in words.", exampleCn: "很难用言语表达我的感受。" },
    { word: "factor", phonetic: "/ˈfæktə(r)/", meaning: "n. 因素，要素", example: "Cost is an important factor in the decision.", exampleCn: "成本是决策中的重要因素。" },
    { word: "feature", phonetic: "/ˈfiːtʃə(r)/", meaning: "n. 特点，特征", example: "The phone has many advanced features.", exampleCn: "这款手机有许多先进功能。" },
    { word: "function", phonetic: "/ˈfʌŋkʃn/", meaning: "n./v. 功能，作用", example: "The main function of the heart is to pump blood.", exampleCn: "心脏的主要功能是泵血。" }
];

const speakingQuestions = {
    1: [
        { type: "Part 1 - 基础话题", text: "Where is your hometown?", hint: "试着回答：在哪 + 什么样 + 喜欢吗" },
        { type: "Part 1 - 基础话题", text: "Do you work or are you a student?", hint: "简单说明身份，加一句你喜不喜欢" },
        { type: "Part 1 - 基础话题", text: "What kind of accommodation do you live in?", hint: "房子/公寓 + 和谁住 + 住了多久" },
        { type: "Part 1 - 基础话题", text: "What do you usually do in the morning?", hint: "起床时间 + 早上的习惯（2个）" },
        { type: "Part 1 - 基础话题", text: "Do you like cooking? Why?", hint: "喜欢/不喜欢 + 原因 + 例子" },
        { type: "Part 1 - 基础话题", text: "What is your favorite food?", hint: "什么食物 + 为什么喜欢 + 多久吃一次" },
        { type: "Part 1 - 基础话题", text: "How do you usually go to school or work?", hint: "交通方式 + 原因 + 用时多久" },
        { type: "Part 1 - 基础话题", text: "Do you like watching movies?", hint: "喜欢/不喜欢 + 类型 + 多久看一次" },
        { type: "Part 1 - 基础话题", text: "What kind of music do you like?", hint: "类型 + 为什么 + 什么时候听" },
        { type: "Part 1 - 基础话题", text: "Do you prefer hot weather or cold weather?", hint: "选一边 + 原因 + 举例说明" }
    ],
    2: [
        { type: "Part 1 扩展", text: "Tell me something about your hometown.", hint: "位置 + 大小 + 特色 + 你喜不喜欢" },
        { type: "Part 1 扩展", text: "Describe your daily routine on a typical day.", hint: "早上/下午/晚上各做什么（3个活动）" },
        { type: "Part 1 扩展", text: "What do you like about your neighborhood?", hint: "设施 + 人 + 环境" },
        { type: "Part 2 练习", text: "Describe a book you have read recently.\n(说满30秒)", hint: "什么书 + 讲什么 + 为什么喜欢 + 推荐给谁" },
        { type: "Part 2 练习", text: "Tell me about a trip you have taken.\n(说满30秒)", hint: "去哪 + 和谁 + 做了什么 + 印象最深的事" },
        { type: "Part 2 练习", text: "Describe a person you admire.\n(说满30秒)", hint: "谁 + 什么样 + 为什么 admire + 对你的影响" },
        { type: "Part 1 扩展", text: "What do you usually do on weekends?", hint: "周六 + 周日 + 最喜欢哪个部分" },
        { type: "Part 1 扩展", text: "Describe your favorite season and why.", hint: "哪个季节 + 天气 + 活动 + 感受" },
        { type: "Part 1 扩展", text: "Tell me about an important festival in your country.", hint: "什么节日 + 什么时候 + 怎么庆祝 + 意义" },
        { type: "Part 2 练习", text: "Describe a skill you would like to learn.\n(说满30秒)", hint: "什么技能 + 为什么想学 + 怎么学 + 学后做什么" }
    ],
    3: [
        { type: "Part 2 完整题", text: "Describe a time when you helped someone.\n(说满1分钟)", hint: "谁 + 什么情况 + 你做了什么 + 结果 + 感受" },
        { type: "Part 2 完整题", text: "Describe a place you have visited that was affected by pollution.\n(说满1分钟)", hint: "哪里 + 什么污染 + 怎么发现的 + 感受" },
        { type: "Part 2 完整题", text: "Describe a piece of technology you use every day.\n(说满1分钟)", hint: "什么 + 做什么用 + 为什么重要 + 没有它怎么办" },
        { type: "Part 2 完整题", text: "Describe a gift you gave to someone.\n(说满1分钟)", hint: "什么 + 给谁 + 为什么送 + 对方反应" },
        { type: "Part 2 完整题", text: "Describe an important decision you made.\n(说满1分钟)", hint: "什么决定 + 什么时候 + 怎么做的 + 结果" },
        { type: "Part 3 讨论", text: "Why do you think some people don't like to help others?", hint: "观点 + 解释 + 例子" },
        { type: "Part 3 讨论", text: "Do you think technology has made people less social?", hint: "观点 + 解释 + 对比" },
        { type: "Part 3 讨论", text: "What are the advantages of living in a big city?", hint: "2-3个优点 + 解释" },
        { type: "Part 3 讨论", text: "Should governments ban private cars to reduce pollution?", hint: "观点 + 原因 + 反面考虑" },
        { type: "Part 3 讨论", text: "Is online education as effective as traditional education?", hint: "比较 + 各说利弊 + 结论" }
    ]
};

const writingTemplates = {
    "task1-static": {
        title: "静态图（柱状图/饼图）4段式模板",
        fields: [
            { name: "chartType", label: "图表类型", type: "select", options: ["柱状图", "饼图", "表格"] },
            { name: "topic", label: "图表主题", type: "text", placeholder: "例如：不同年龄段的人使用社交媒体的比例" },
            { name: "highest", label: "最高值类别", type: "text", placeholder: "例如：18-24岁年轻人" },
            { name: "highestValue", label: "最高值数据", type: "text", placeholder: "例如：85%" },
            { name: "lowest", label: "最低值类别", type: "text", placeholder: "例如：65岁以上老年人" },
            { name: "lowestValue", label: "最低值数据", type: "text", placeholder: "例如：25%" },
            { name: "another", label: "另一个值得一提的类别", type: "text", placeholder: "例如：25-44岁中年人" },
            { name: "anotherValue", label: "该类别的数据", type: "text", placeholder: "例如：60%" }
        ],
        template: (d) =>
`The ${d.chartType} compares ${d.topic}.

Overall, it is clear that ${d.highest} had the highest figure at ${d.highestValue}, while ${d.lowest} had the lowest at ${d.lowestValue}.

In terms of the highest proportion, ${d.highest} accounted for ${d.highestValue}. This figure was significantly higher than that of other groups. By contrast, ${d.lowest} only represented ${d.lowestValue}, making it the smallest category in the chart.

It is also worth noting that ${d.another} stood at ${d.anotherValue}, which was moderate compared to the two extremes mentioned above.

(Word count: approximately 110 words)`,
        tips: [
            "静态图不需要描述趋势（上升/下降），只需要对比数据大小。",
            "Overview段必须写，否则Task Achievement会扣分。",
            "学会用accounted for, represented, stood at来替换have。"
        ]
    },
    "task1-dynamic": {
        title: "动态图（线图/变化图）4段式模板",
        fields: [
            { name: "chartType", label: "图表类型", type: "select", options: ["线图", "柱状图"] },
            { name: "topic", label: "图表主题", type: "text", placeholder: "例如：某城市1990-2020年的汽车数量变化" },
            { name: "increaseItem", label: "上升的项目", type: "text", placeholder: "例如：私家车数量" },
            { name: "decreaseItem", label: "下降的项目", type: "text", placeholder: "例如：公共交通使用率" },
            { name: "stableItem", label: "保持不变的项目", type: "text", placeholder: "例如：自行车出行比例" },
            { name: "timeRange", label: "时间范围", type: "text", placeholder: "例如：from 1990 to 2020" }
        ],
        template: (d) =>
`The ${d.chartType} illustrates how ${d.topic} changed ${d.timeRange}.

Overall, there was a clear upward trend in ${d.increaseItem}, while ${d.decreaseItem} declined over the same period. In contrast, ${d.stableItem} remained relatively stable.

Looking at the data in more detail, ${d.increaseItem} experienced a significant rise throughout the period. This growth was particularly noticeable in the first decade. On the other hand, ${d.decreaseItem} fell steadily, dropping to its lowest point by the end of the period.

With regard to ${d.stableItem}, the figure stayed almost unchanged ${d.timeRange}, suggesting that this mode was not greatly affected by the overall shift in transportation habits.

(Word count: approximately 120 words)`,
        tips: [
            "动态图必须描述趋势：上升(rise/increase)、下降(fall/decline)、波动(fluctuate)、稳定(remain stable)。",
            "注意时态：过去时间用过去时，现在时间用现在时。",
            "用连接词把趋势串联起来：However, In contrast, On the other hand。"
        ]
    },
    "task2-opinion": {
        title: "大作文 - 同意与否（Opinion Essay）",
        fields: [
            { name: "topic", label: "作文题目", type: "text", placeholder: "例如：Should governments ban violent video games?" },
            { name: "opinion", label: "你的观点", type: "select", options: ["同意", "不同意", "部分同意"] },
            { name: "reason1", label: "理由一", type: "text", placeholder: "例如：violent games may encourage aggressive behavior" },
            { name: "example1", label: "理由一的例子", type: "text", placeholder: "例如：studies show players become more aggressive after gaming" },
            { name: "reason2", label: "理由二", type: "text", placeholder: "例如：young people cannot distinguish fantasy from reality" },
            { name: "example2", label: "理由二的例子", type: "text", placeholder: "例如：children may imitate violent scenes in real life" }
        ],
        template: (d) => {
            const opinionText = d.opinion === "同意" ? "completely agree" : d.opinion === "不同意" ? "completely disagree" : "partially agree";
            const introOpinion = d.opinion === "部分同意" ? "agree to some extent, but I also believe there are other factors to consider" : ` ${opinionText} with this view`;
            return `In many countries, there is an ongoing debate about whether ${d.topic}. In my opinion, I${introOpinion}.

There are several reasons why I hold this view. Firstly, ${d.reason1}. For example, ${d.example1}. This suggests that such content can have a negative influence on players' behavior.

Secondly, ${d.reason2}. To illustrate, ${d.example2}. Therefore, it is reasonable to argue that restrictions on this type of entertainment may be necessary.

In conclusion, while some people may argue that video games are just harmless fun, I believe that ${d.opinion === "不同意" ? "banning them is not the best solution, but regulation is needed" : "governments should take action to limit the negative effects of violent games on society"}. Parents and educators also have a role to play in guiding young people to make better choices.

(Word count: approximately 260 words)`;
        },
        tips: [
            "开头段必须明确表态，不能模棱两可（除非是partially agree）。",
            "每个主体段结构：观点(Topic sentence) + 解释(Explain) + 例子(Example) + 总结(So/Therefore)。",
            "不要背整篇范文，要背这种结构，然后填入自己的内容。"
        ]
    }
};

// ============ LocalStorage 工具 ============

function loadData(key, defaultValue) {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
}

function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// ============ 全局状态 ============

let stats = loadData("ielts_starter_stats", { days: 1, wordsMastered: 0, tasksCompleted: 0, currentDate: new Date().toDateString() });
let knownWords = loadData("ielts_starter_known_words", []);
let currentWordIndex = 0;
let currentSpeakingLevel = 1;
let currentTemplate = "task1-static";
let timerInterval = null;
let timerSeconds = 0;

// 检查是否新的一天
const today = new Date().toDateString();
if (stats.currentDate !== today) {
    stats.days++;
    stats.currentDate = today;
    stats.tasksCompleted = 0;
    saveData("ielts_starter_stats", stats);
}

// ============ 路由 ============

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        switchPage(page);
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

function switchPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${page}`).classList.add('active');
    window.scrollTo(0, 0);
}

// ============ 首页 ============

function updateStats() {
    document.getElementById('stat-days').textContent = stats.days;
    document.getElementById('stat-words').textContent = knownWords.length;
    const todayTasks = loadData("ielts_starter_today_tasks", []);
    const completed = todayTasks.filter(t => t.completed).length;
    document.getElementById('stat-tasks').textContent = `${completed}/${todayTasks.length || 5}`;
}

const taskTemplates = [
    { text: "背诵20个核心词汇（词汇页）", link: "words" },
    { text: "精听一篇听力Section 1（可去B站搜剑桥雅思听力）", link: null },
    { text: "做一篇阅读Passage 1（限时20分钟）", link: null },
    { text: "用模板填空写一篇小作文（写作页）", link: "writing" },
    { text: "练习3个口语Part 1问题（口语页）", link: "speaking" }
];

document.getElementById('btn-generate-task').addEventListener('click', () => {
    const container = document.getElementById('today-tasks');
    container.innerHTML = '';
    container.classList.remove('hidden');

    const tasks = taskTemplates.map((t, i) => ({ ...t, id: i, completed: false }));
    saveData("ielts_starter_today_tasks", tasks);

    tasks.forEach(task => {
        const item = document.createElement('div');
        item.className = 'task-item';
        item.innerHTML = `
            <div class="task-checkbox"></div>
            <div class="task-text">${task.text}</div>
        `;
        item.addEventListener('click', () => {
            task.completed = !task.completed;
            item.classList.toggle('completed');
            item.querySelector('.task-checkbox').textContent = task.completed ? '✓' : '';
            saveData("ielts_starter_today_tasks", tasks);
            updateStats();
            if (task.link && task.completed) {
                setTimeout(() => switchPage(task.link), 300);
            }
        });
        container.appendChild(item);
    });
    updateStats();
});

// 加载今日任务（如果已生成）
function loadTodayTasks() {
    const tasks = loadData("ielts_starter_today_tasks", []);
    if (tasks.length > 0) {
        const container = document.getElementById('today-tasks');
        container.innerHTML = '';
        container.classList.remove('hidden');
        tasks.forEach(task => {
            const item = document.createElement('div');
            item.className = 'task-item' + (task.completed ? ' completed' : '');
            item.innerHTML = `
                <div class="task-checkbox">${task.completed ? '✓' : ''}</div>
                <div class="task-text">${task.text}</div>
            `;
            item.addEventListener('click', () => {
                task.completed = !task.completed;
                item.classList.toggle('completed');
                item.querySelector('.task-checkbox').textContent = task.completed ? '✓' : '';
                saveData("ielts_starter_today_tasks", tasks);
                updateStats();
                if (task.link && task.completed) {
                    setTimeout(() => switchPage(task.link), 300);
                }
            });
            container.appendChild(item);
        });
    }
}

// ============ 词汇页 ============

function renderWord(index) {
    const word = vocabulary[index];
    document.getElementById('card-word').textContent = word.word;
    document.getElementById('card-phonetic').textContent = word.phonetic;
    document.getElementById('card-meaning').textContent = word.meaning;
    document.getElementById('card-example').textContent = `"${word.example}"`;
    document.getElementById('card-example-cn').textContent = word.exampleCn;

    const card = document.getElementById('flashcard');
    card.classList.remove('flipped');

    document.getElementById('word-mastered').textContent = knownWords.length;
    document.getElementById('word-total').textContent = vocabulary.length;
    const progress = (knownWords.length / vocabulary.length) * 100;
    document.getElementById('word-progress').style.width = progress + '%';
}

document.getElementById('flashcard').addEventListener('click', () => {
    document.getElementById('flashcard').classList.toggle('flipped');
});

document.getElementById('btn-speak').addEventListener('click', (e) => {
    e.stopPropagation();
    const word = vocabulary[currentWordIndex].word;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
});

document.getElementById('btn-prev').addEventListener('click', () => {
    currentWordIndex = (currentWordIndex - 1 + vocabulary.length) % vocabulary.length;
    renderWord(currentWordIndex);
});

document.getElementById('btn-next').addEventListener('click', () => {
    currentWordIndex = (currentWordIndex + 1) % vocabulary.length;
    renderWord(currentWordIndex);
});

document.getElementById('btn-known').addEventListener('click', () => {
    if (!knownWords.includes(currentWordIndex)) {
        knownWords.push(currentWordIndex);
        saveData("ielts_starter_known_words", knownWords);
    }
    currentWordIndex = (currentWordIndex + 1) % vocabulary.length;
    renderWord(currentWordIndex);
    updateStats();
});

document.getElementById('btn-unknown').addEventListener('click', () => {
    currentWordIndex = (currentWordIndex + 1) % vocabulary.length;
    renderWord(currentWordIndex);
});

// ============ 口语页 ============

function renderQuestion() {
    const questions = speakingQuestions[currentSpeakingLevel];
    const q = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question-type').textContent = q.type;
    document.getElementById('question-text').textContent = q.text;
    document.getElementById('question-hint').textContent = q.hint;
}

document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentSpeakingLevel = parseInt(btn.dataset.level);
        renderQuestion();
    });
});

document.getElementById('btn-next-question').addEventListener('click', renderQuestion);

// 计时器
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

document.getElementById('btn-timer-start').addEventListener('click', () => {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        timerSeconds++;
        document.getElementById('timer-display').textContent = formatTime(timerSeconds);
    }, 1000);
});

document.getElementById('btn-timer-pause').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById('btn-timer-reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 0;
    document.getElementById('timer-display').textContent = "00:00";
});

// ============ 写作页 ============

function renderTemplateForm() {
    const tmpl = writingTemplates[currentTemplate];
    document.getElementById('template-title').textContent = tmpl.title;
    const form = document.getElementById('template-form');
    form.innerHTML = '';

    tmpl.fields.forEach(field => {
        const group = document.createElement('div');
        group.className = 'form-group';

        const label = document.createElement('label');
        label.textContent = field.label;
        group.appendChild(label);

        let input;
        if (field.type === 'select') {
            input = document.createElement('select');
            field.options.forEach(opt => {
                const option = document.createElement('option');
                option.value = opt;
                option.textContent = opt;
                input.appendChild(option);
            });
        } else {
            input = document.createElement('input');
            input.type = 'text';
            input.placeholder = field.placeholder || '';
        }
        input.dataset.name = field.name;
        group.appendChild(input);
        form.appendChild(group);
    });
}

document.querySelectorAll('.template-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.template-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTemplate = btn.dataset.template;
        renderTemplateForm();
        document.getElementById('essay-result-card').classList.add('hidden');
    });
});

document.getElementById('btn-generate-essay').addEventListener('click', () => {
    const tmpl = writingTemplates[currentTemplate];
    const data = {};
    document.querySelectorAll('#template-form input, #template-form select').forEach(input => {
        data[input.dataset.name] = input.value;
    });

    // 检查必填
    const firstField = tmpl.fields[0];
    if (!data[firstField.name]) {
        alert('请至少填写第一个字段');
        return;
    }

    const essay = tmpl.template(data);
    document.getElementById('essay-output').textContent = essay;

    const tipsList = document.getElementById('essay-tips-list');
    tipsList.innerHTML = '';
    tmpl.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });

    document.getElementById('essay-result-card').classList.remove('hidden');
    document.getElementById('essay-result-card').scrollIntoView({ behavior: 'smooth' });
});

// ============ 听力页 ============

document.getElementById('btn-load-text').addEventListener('click', () => {
    const text = document.getElementById('listening-text').value.trim();
    if (!text) {
        alert('请先粘贴听力原文');
        return;
    }

    const audioUrl = document.getElementById('audio-url').value.trim();
    const audioPlayer = document.getElementById('audio-player');
    if (audioUrl) {
        audioPlayer.src = audioUrl;
        audioPlayer.classList.remove('hidden');
    } else {
        audioPlayer.classList.add('hidden');
    }

    const sentences = text.split(/[.!?\n]+/).filter(s => s.trim().length > 0);
    const list = document.getElementById('sentence-list');
    list.innerHTML = '';

    sentences.forEach((sentence, index) => {
        const item = document.createElement('div');
        item.className = 'sentence-item';
        item.textContent = sentence.trim();
        item.addEventListener('click', () => {
            document.querySelectorAll('.sentence-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // 使用TTS朗读该句
            const utterance = new SpeechSynthesisUtterance(sentence.trim());
            utterance.lang = 'en-GB';
            utterance.rate = 0.9;
            speechSynthesis.cancel();
            speechSynthesis.speak(utterance);
        });
        list.appendChild(item);
    });

    document.getElementById('listening-player-card').classList.remove('hidden');
});

// ============ 初始化 ============

updateStats();
loadTodayTasks();
renderWord(currentWordIndex);
renderQuestion();
renderTemplateForm();
