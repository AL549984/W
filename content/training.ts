import {
  Bot,
  BrainCircuit,
  ClipboardCheck,
  Compass,
  FileText,
  Flag,
  Gauge,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Trophy
} from "lucide-react";

export type NavSection = {
  title: string;
  items: Array<{
    href: string;
    label: string;
  }>;
};

export const navSections: NavSection[] = [
  {
    title: "快速入门",
    items: [
      { href: "#overview", label: "训练目标" },
      { href: "#daily-plan", label: "7 日路径" },
      { href: "#day-one", label: "启动 SOP" },
      { href: "#waytoagi", label: "Waytoagi 指引" },
      { href: "#checkin", label: "飞书打卡规范" },
      { href: "#valid-checkin", label: "有效打卡" },
      { href: "#dashboard", label: "飞书看板" },
      { href: "#compliance", label: "合规红线" }
    ]
  },
  {
    title: "国产大模型实战",
    items: [
      { href: "#doubao", label: "豆包洗稿流程" },
      { href: "#coze", label: "Coze 业务 Bot" },
      { href: "#qa", label: "异步答疑机制" }
    ]
  },
  {
    title: "进阶操作",
    items: [
      { href: "#gemini", label: "Gemini 配置" },
      { href: "#contest", label: "提效大赛" },
      { href: "#templates", label: "提交模板" },
      { href: "#acceptance", label: "验收标准" },
      { href: "#operations", label: "试运行规则" },
      { href: "#faq", label: "FAQ" }
    ]
  }
];

export const metrics = [
  { label: "基础问题拦截", value: "90%", icon: ShieldCheck },
  { label: "个人训练路径", value: "7 步", icon: Gauge },
  { label: "每日有效打卡", value: "1 次", icon: ClipboardCheck },
  { label: "核心交付物", value: "3 类", icon: Layers3 }
];

export const progressGuidance = [
  "从第一次提交打卡当天开始计算个人 Day 1，不跟随全员统一日期。",
  "每天完成一个训练任务并提交一次打卡；中断后从上一次未完成的 Day 继续。",
  "连续 2 天未打卡时，下一次提交需补充未完成原因，方便管理侧判断是否需要介入。",
  "每次打卡都要留下可检查成果，最终以可复用资产和作品质量作为验收依据。"
];

export const quickSteps = [
  {
    title: "进入飞书主场",
    detail: "加入【AI 学习交流群】，所有通知、答疑、打卡链接都以群内置顶消息为准。",
    icon: Flag
  },
  {
    title: "完成认知预热",
    detail: "自主浏览 Waytoagi.com，重点理解提示词、Agent、工作流、知识库四个基础概念。",
    icon: Compass
  },
  {
    title: "初始化工具环境",
    detail: "注册并登录豆包、Coze，先完成账号可用性检查，不在群里刷屏提交截图。",
    icon: Sparkles
  },
  {
    title: "每日表单打卡",
    detail: "通过飞书多维表格【AI 学习与实战每日打卡】提交训练进度、工具、姓名、日期和成果链接。",
    icon: ClipboardCheck
  },
  {
    title: "集中异步答疑",
    detail: "基础问题先查教程和 FAQ，仍无法解决时按固定格式在群内提问，避免一对一消耗。",
    icon: BrainCircuit
  }
];

export const complianceRules = [
  "客户姓名、联系方式、账户信息、身份证件等个人或客户敏感信息不得上传。",
  "账号密码、验证码、密钥、付款信息和内部系统入口不得上传。",
  "合同原文、报价文件、未公开经营数据、内部会议原文不得上传。",
  "未公开策略、交易细节、持仓数据、QMT 相关核心参数不得上传。",
  "对外发送前必须人工复核事实、数字、结论倾向和措辞边界。"
];

export const validCheckinRules = [
  "必须选择训练进度 Day 1-Day 7，不能只写日期或自由文本。",
  "必须填写真实任务场景，只有“学习了 AI”“看了教程”不算有效打卡。",
  "必须提供成果链接或截图；没有可检查成果的记录默认退回。",
  "节省时间估算必须填写数字或百分比，不接受“感觉更快”。",
  "涉及敏感信息、未脱敏材料或无法复核的结论，直接退回重提。"
];

export const dashboardMetrics = [
  {
    title: "当前进度",
    detail: "每个人当前处于 Day 1-Day 7 的哪一步，便于判断整体推进分布。"
  },
  {
    title: "最近打卡",
    detail: "展示最近一次有效打卡日期，避免只看累计次数导致误判。"
  },
  {
    title: "暂停天数",
    detail: "用公式字段计算今天距离最近打卡日期间隔几天，超过阈值自动进入提醒视图。"
  },
  {
    title: "资产产出",
    detail: "标记是否产出提示词、模板、Bot 或工作流，避免只完成打卡但没有沉淀。"
  }
];

export const dashboardFields = [
  "人员：使用飞书人员字段或姓名字段，保证每条记录能归属到个人。",
  "训练进度：单选字段 Day 1-Day 7，按个人路径填写。",
  "最近打卡日期：日期字段，用于判断是否停滞。",
  "暂停天数：公式字段，计算今天与最近打卡日期的间隔天数。",
  "状态：单选字段，建议包含正常、需提醒、暂停、已完成。",
  "可复用资产：记录提示词、模板、Bot、工作流链接或数量。"
];

export const dashboardViews = [
  "个人进度总览：按人员展示当前 Day、最近打卡日期、暂停天数、状态。",
  "暂停提醒视图：筛选暂停天数大于等于 2，或状态为需提醒/暂停。",
  "Day 分布视图：按训练进度分组，查看成员集中在哪些阶段。",
  "资产沉淀视图：筛选可复用资产不为空，沉淀优秀提示词、模板和 Bot。"
];

export const acceptanceCriteria = [
  "有真实业务场景：说明原始任务、输入材料和原本人工处理方式。",
  "有处理前后对比：能看出结构、质量或时间上的变化。",
  "有可复用资产：提示词、模板、Bot 或工作流至少沉淀一种。",
  "有节省时间估算：用分钟或百分比表达，并说明估算依据。",
  "有人工核验说明：标注事实、数字、结论和对外表达的复核动作。"
];

export const assetExitRules = [
  "完成 Day 7 后，优秀提示词进入团队提示词库候选。",
  "可稳定复用的 Coze Bot 进入团队 Bot 清单候选。",
  "能重复跑通的流程进入团队 SOP 或工作流候选。",
  "未达到验收标准的作品不进入资产库，只作为个人学习记录保留。"
];

export const operationRules = [
  "第一期为试运行，规则会根据打卡质量和作品产出调整。",
  "未按格式提问、FAQ 已覆盖、未提供截图或链接的问题，默认不处理。",
  "辅导资源优先处理共性问题和高价值案例，不做逐条保姆式答疑。"
];

export const dailyPlan = [
  {
    day: "Day 1",
    title: "建立 AI 基础认知",
    focus: "Waytoagi 导航学习、飞书打卡规则、工具账号可用性检查。",
    output: "提交 3 条可复用提示词、1 条工具边界说明、1 个想提效的真实工作场景。"
  },
  {
    day: "Day 2",
    title: "豆包文本提效",
    focus: "用豆包处理读后感、纪要、摘要、汇报稿等文本任务。",
    output: "提交处理前后对比、最终稿、提示词和节省时间估算。"
  },
  {
    day: "Day 3",
    title: "Coze Bot 入门",
    focus: "选择一个高频重复任务，搭建最小可用业务 Bot。",
    output: "提交 Bot 名称、适用场景、角色提示词、5 组测试结果。"
  },
  {
    day: "Day 4",
    title: "流程固化与复盘",
    focus: "把豆包提示词或 Coze Bot 改成可复用模板，减少下次从零提问。",
    output: "提交一份可复制模板，并说明适用条件和不适用场景。"
  },
  {
    day: "Day 5",
    title: "参赛作品初稿",
    focus: "围绕真实工作任务整理提效大赛作品，补齐数据和人工核验说明。",
    output: "提交参赛作品初稿、效率提升估算、质量自评。"
  },
  {
    day: "Day 6",
    title: "交叉评审与优化",
    focus: "同组互看作品，检查是否可复用、是否有敏感信息、结果是否可解释。",
    output: "提交最终作品链接，标注采纳的修改意见。"
  },
  {
    day: "Day 7",
    title: "评审展示与沉淀",
    focus: "集中评选优秀案例，将高质量提示词、模板和 Bot 沉淀为团队资产。",
    output: "提交最终复盘：最有效工具、最佳应用场景、后续可推广流程。"
  }
];

export const doubaoWorkflow = [
  "输入原始材料，要求豆包先提炼核心论点、事实、数据和风险点。",
  "选择目标场景：读后感、研究纪要、客户汇报、内部复盘，不混用语气。",
  "要求模型输出三版：精简版、正式版、管理层摘要版。",
  "人工核对专有名词、数字、结论倾向，不允许直接复制未经核验的结果。",
  "将最终稿和提示词一并提交到飞书打卡，便于复盘谁真正提升了效率。"
];

export const cozeWorkflow = [
  {
    title: "定义 Bot 边界",
    detail: "只解决一个高频问题，例如研报摘要、会议纪要整理、QMT 策略说明初稿，不做万能助手。"
  },
  {
    title: "配置角色提示词",
    detail: "写清身份、输入格式、输出结构、禁止事项和核验要求，让 Bot 有稳定的业务口径。"
  },
  {
    title: "加入知识材料",
    detail: "上传 SOP、模板、常见问答或业务说明，避免每次都从零解释背景。"
  },
  {
    title: "跑 5 组测试样例",
    detail: "用真实工作材料测试，记录失败案例，迭代提示词后再作为参赛作品提交。"
  }
];

export const contestRules = [
  {
    title: "参赛对象",
    detail: "团队全员参与，允许 1 人单独提交，也允许 2-3 人组队提交。"
  },
  {
    title: "赛题方向",
    detail: "围绕读后感整理、研报摘要、会议纪要、客户沟通文案、QMT 策略说明等真实场景。"
  },
  {
    title: "交付标准",
    detail: "提交原始任务、AI 工具与提示词、处理前后对比、节省时间估算、可复用模板或 Bot 链接。"
  },
  {
    title: "评分维度",
    detail: "效率提升 35%，结果质量 30%，可复用性 20%，合规与人工核验 15%。"
  },
  {
    title: "管理节奏",
    detail: "完成 Day 1-Day 5 后可提交参赛初稿；完成 Day 6 后提交最终作品；完成 Day 7 后进入优秀案例沉淀。"
  }
];

export const submissionTemplate = [
  "作品名称：一句话说明解决了什么问题。",
  "原始任务：贴出任务背景、输入材料类型、原本人工处理方式。",
  "使用工具：豆包 / Coze / Gemini / 组合工具，并说明为什么选它。",
  "关键提示词或 Bot 配置：保留可复用部分，敏感内容必须脱敏。",
  "处理前后对比：展示时间、质量、结构、可复用性上的变化。",
  "节省时间估算：用分钟或百分比表达，不接受“感觉更快”。",
  "人工核验：说明哪些结论、数字、表达经过人工复核。",
  "成果链接：文档、截图、Bot 链接或模板链接。"
];

export const scoreRubric = [
  {
    item: "效率提升",
    weight: "35%",
    standard: "是否明显减少重复劳动，节省时间估算是否可信。"
  },
  {
    item: "结果质量",
    weight: "30%",
    standard: "输出是否准确、结构清晰、能否直接进入业务流转。"
  },
  {
    item: "可复用性",
    weight: "20%",
    standard: "提示词、模板或 Bot 是否能被其他成员复用。"
  },
  {
    item: "合规核验",
    weight: "15%",
    standard: "是否脱敏，是否保留人工复核，是否避免上传敏感信息。"
  }
];

export const faqItems = [
  {
    question: "不会写提示词怎么办？",
    answer: "先按“角色、任务、输入、输出格式、限制条件、校验要求”六段式写，不追求一次完美。提交打卡时保留失败版本，方便复盘。"
  },
  {
    question: "豆包输出太空、太像套话怎么办？",
    answer: "补充目标读者、使用场景、字数范围和原始材料，让模型先提炼事实再改写。不要只发“帮我优化一下”。"
  },
  {
    question: "Coze Bot 要做多复杂才算合格？",
    answer: "第一期只要求最小可用：能稳定处理一个高频任务，有清晰输入格式、输出结构和 5 组测试记录即可。"
  },
  {
    question: "每天必须在群里发读后感吗？",
    answer: "不需要。统一走飞书表单打卡，群里只发共性问题、优秀案例和需要大家共同确认的事项。"
  },
  {
    question: "成果链接可以只放截图吗？",
    answer: "可以作为补充，但最好同时放文档、提示词、模板或 Bot 链接。管理层需要看到可复用资产，而不是只看结果截图。"
  },
  {
    question: "涉及客户或策略内容怎么办？",
    answer: "必须先脱敏。客户名称、账号、合同、未公开策略、交易细节、内部经营数据都不能直接放进公共 AI 工具。"
  },
  {
    question: "Gemini 阶段什么时候开始？",
    answer: "完成国产工具基础训练，并能独立提交合格作品后再进入。账号费用和网络环境由个人自行判断与承担。"
  }
];

export const toolCards = [
  {
    name: "Waytoagi",
    label: "认知地图",
    icon: Globe2,
    description: "用于建立 AI 工具谱系、Prompt、Agent 和自动化工作流的基础认知。"
  },
  {
    name: "豆包",
    label: "文本提效",
    icon: FileText,
    description: "优先用于读后感、纪要、摘要、改写和管理层汇报稿的快速生成与重构。"
  },
  {
    name: "Coze",
    label: "业务 Bot",
    icon: Bot,
    description: "将高频重复任务固化成可复用 Bot，减少员工每次从零提问的时间。"
  },
  {
    name: "Gemini",
    label: "进阶能力",
    icon: Trophy,
    description: "用于更强的长上下文、多模态和复杂推理场景，进入第二阶段后开放。"
  }
];
