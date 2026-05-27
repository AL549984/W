import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Rocket
} from "lucide-react";
import { Alert } from "@/components/Alert";
import { StepCard } from "@/components/StepCard";
import {
  contestRules,
  cozeWorkflow,
  dailyPlan,
  doubaoWorkflow,
  faqItems,
  metrics,
  navSections,
  quickSteps,
  scoreRubric,
  submissionTemplate,
  toolCards
} from "@/content/training";

const feishuCheckinUrl = "https://ycn3zdw6f1p7.feishu.cn/share/base/form/shrcnBc0xJ7ph6KBDSpkdmwizie";
const mobileNavItems = navSections.flatMap((section) => section.items);

function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-7">
      <p className="text-sm font-semibold text-brand">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-normal text-ink md:text-3xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-muted">{description}</p>
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700">
          <Check className="mt-1 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-line bg-white/88 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#overview" className="flex items-center gap-3" aria-label="吴总团队 AI 提效训练营首页">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-white">
              <Rocket className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">AI 提效训练营</p>
              <p className="text-xs text-muted">吴总团队标准化教程</p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex" aria-label="顶部导航">
            <a className="hover:text-ink" href="#waytoagi">
              快速入门
            </a>
            <a className="hover:text-ink" href="#coze">
              工具实战
            </a>
            <a className="hover:text-ink" href="#contest">
              提效大赛
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={feishuCheckinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-brand px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              <span className="sm:hidden">打卡</span>
              <span className="hidden sm:inline">前往飞书打卡</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <nav className="border-t border-line bg-white/95 px-4 py-2 lg:hidden" aria-label="移动端章节导航">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {mobileNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-muted"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-6 sm:px-6 md:py-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10 lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-lg border border-line bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase text-gray-400">目录</p>
            <div className="mt-5 space-y-6">
              {navSections.map((section) => (
                <div key={section.title}>
                  <p className="mb-2 text-sm font-semibold text-ink">{section.title}</p>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <a
                          className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted transition hover:bg-surface hover:text-ink"
                          href={item.href}
                        >
                          {item.label}
                          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-12">
          <section id="overview" className="rounded-lg border border-line bg-white p-6 shadow-soft md:p-9">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-brand">Training System / QMT AI Enablement</p>
                <h1 className="mt-4 max-w-4xl break-words text-2xl font-semibold leading-tight tracking-normal text-ink sm:text-4xl md:text-5xl">
                  吴总团队 AI 降本增效训练体系
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
                  以标准化文档、飞书看板和轻量竞赛替代手把手教学，把基础问题挡在教程内，把真正值得讨论的问题沉淀成可复用资产。
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#day-one"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-ink px-5 text-sm font-semibold text-white transition hover:bg-gray-800"
                  >
                    开始执行
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={feishuCheckinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-white px-5 text-sm font-semibold text-ink transition hover:bg-surface"
                  >
                    打开打卡表单
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-line bg-surface p-5">
                <p className="text-sm font-semibold text-ink">当前状态</p>
                <div className="mt-4 space-y-3">
                  {["飞书群已创建", "多维表格打卡已上线", "5 步启动 SOP 已发送", "教程站进入建设阶段"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-md bg-white px-3 py-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-mint" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="rounded-lg border border-line bg-white p-4">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                    <p className="mt-4 text-2xl font-semibold text-ink">{metric.value}</p>
                    <p className="mt-1 text-sm text-muted">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="daily-plan" className="rounded-lg border border-line bg-white p-6 md:p-9">
            <SectionTitle
              eyebrow="Daily Tasks"
              title="7 天每日任务安排"
              description="每天只推进一个明确目标，配套一个可提交成果。员工照着做，袁哥照着看进度。"
            />
            <div className="grid gap-4">
              {dailyPlan.map((task, index) => (
                <article key={task.day} className="rounded-lg border border-line bg-surface p-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand">{task.day}</p>
                        <h3 className="mt-1 text-lg font-semibold text-ink">{task.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted">{task.focus}</p>
                      </div>
                    </div>
                    <div className="rounded-lg border border-line bg-white p-4 text-sm leading-6 text-gray-700 md:w-80">
                      <span className="font-semibold text-ink">当日交付：</span>
                      {task.output}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="day-one" className="rounded-lg border border-line bg-white p-6 md:p-9">
            <SectionTitle
              eyebrow="Chapter 01"
              title="快速入门：第二天上午前必须跑通"
              description="这部分是防御工事的核心：所有人按统一路径自学、初始化工具、提交打卡，基础问题不进入一对一沟通。"
            />
            <div className="grid gap-4">
              {quickSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <StepCard key={step.title} index={index + 1} title={step.title}>
                    <div className="flex gap-3">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span>{step.detail}</span>
                    </div>
                  </StepCard>
                );
              })}
            </div>
          </section>

          <section id="waytoagi" className="rounded-lg border border-line bg-white p-6 md:p-9">
            <SectionTitle
              eyebrow="Knowledge Map"
              title="Waytoagi.com 认知指引"
              description="目标不是让员工收藏一堆链接，而是建立统一语言：知道 AI 能做什么、边界在哪里、如何提出可执行的问题。"
            />
            <div className="grid gap-4 md:grid-cols-2">
              {toolCards.map((tool) => {
                const Icon = tool.icon;
                return (
                  <article key={tool.name} className="rounded-lg border border-line bg-surface p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-ink">{tool.name}</h3>
                          <p className="text-sm text-muted">{tool.label}</p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-700">{tool.description}</p>
                  </article>
                );
              })}
            </div>
            <Alert title="最低学习要求" tone="info">
              每位成员至少整理 3 个可复用提示词、1 个真实业务案例、1 条工具边界说明，并提交到飞书多维表格。
            </Alert>
          </section>

          <section id="checkin" className="rounded-lg border border-line bg-white p-6 md:p-9">
            <SectionTitle
              eyebrow="Feishu Base"
              title="飞书表单打卡规范"
              description="打卡不是形式主义，而是管理层看进度、看质量、看提效资产沉淀的唯一入口。"
            />
            <div className="mb-5 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold text-blue-950">每日打卡入口</p>
                  <p className="mt-1 text-sm leading-6 text-blue-900">提交学习工具、任务场景、成果链接和节省时间估算。</p>
                </div>
                <a
                  href={feishuCheckinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-brand px-4 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  打开飞书表单
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-line bg-surface p-5">
                <h3 className="font-semibold text-ink">必填字段</h3>
                <Checklist
                  items={[
                    "今日研学工具：Waytoagi、豆包、Coze、Gemini 或其他。",
                    "姓名：使用飞书人员字段，便于统计个人参与度。",
                    "日期：每天只提交一次主记录，补充材料放在成果链接中。",
                    "任务场景：说明对应真实工作任务，不接受泛泛而谈。",
                    "成果链接：文档、截图、Bot 链接或提示词模板。"
                  ]}
                />
              </div>
              <div className="rounded-lg border border-line bg-surface p-5">
                <h3 className="font-semibold text-ink">提问格式</h3>
                <div className="mt-4 rounded-lg bg-ink p-4 text-sm leading-6 text-white">
                  <p>【问题类型】账号 / 提示词 / Coze 配置 / 结果质量</p>
                  <p>【已尝试步骤】列出已阅读教程和已操作动作</p>
                  <p>【当前截图或链接】提供必要上下文</p>
                  <p>【期望结果】说明想得到什么输出</p>
                </div>
              </div>
            </div>
          </section>

          <section id="doubao" className="rounded-lg border border-line bg-white p-6 md:p-9">
            <SectionTitle
              eyebrow="Chapter 02"
              title="豆包洗稿提效流程"
              description="豆包优先处理文本类高频任务。所有 AI 输出必须保留人工核验环节，尤其是数字、结论和对外表达。"
            />
            <Checklist items={doubaoWorkflow} />
            <Alert title="禁止事项" tone="warning">
              不允许把客户敏感信息、内部未公开策略、账号密码、合同原文等内容直接粘贴到公共 AI 工具中。
            </Alert>
          </section>

          <section id="coze" className="rounded-lg border border-line bg-white p-6 md:p-9">
            <SectionTitle
              eyebrow="Workflow"
              title="Coze 简易业务 Bot 搭建 SOP"
              description="Coze 的价值在于把一次性提示词沉淀为流程化工具，适合管理重复任务、统一输出口径。"
            />
            <div className="grid gap-4 md:grid-cols-2">
              {cozeWorkflow.map((step, index) => (
                <StepCard key={step.title} index={index + 1} title={step.title}>
                  {step.detail}
                </StepCard>
              ))}
            </div>
          </section>

          <section id="qa" className="rounded-lg border border-line bg-white p-6 md:p-9">
            <SectionTitle
              eyebrow="Operations"
              title="异步答疑机制"
              description="群里只处理共性问题和高价值案例，重复问题统一回到教程链接，避免教学资源被低水平问题消耗。"
            />
            <div className="grid gap-4 md:grid-cols-3">
              {["教程优先", "群内集中", "案例沉淀"].map((title, index) => (
                <div key={title} className="rounded-lg border border-line bg-surface p-5">
                  <p className="text-sm font-semibold text-brand">0{index + 1}</p>
                  <h3 className="mt-3 font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {index === 0 && "先查教程、FAQ、历史打卡案例，确认不是重复基础问题。"}
                    {index === 1 && "按固定格式在群内提问，答案对所有人可见，不私聊分散。"}
                    {index === 2 && "高质量问题转成 FAQ 或案例库，下一批新人直接复用。"}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="gemini" className="rounded-lg border border-line bg-white p-6 md:p-9">
            <SectionTitle
              eyebrow="Chapter 03"
              title="Gemini 账号环境配置指南"
              description="Gemini 作为进阶阶段工具，用于更复杂的长文本、多模态和综合推理任务。基础训练未完成前不进入该阶段。"
            />
            <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
              <Checklist
                items={[
                  "确认个人具备独立学习和问题排查能力，再进入 Gemini 阶段。",
                  "自行准备可用账号、付款方式和第三方网络环境。",
                  "先完成安全测试，不上传客户敏感数据、未公开交易策略或内部经营资料。",
                  "将 Gemini 与豆包、Coze 的同题输出进行对比，记录成本、速度和质量差异。"
                ]}
              />
              <Alert title="商业免责声明" tone="warning">
                Gemini 账号、订阅费用、第三方网络环境及由此产生的账号、付款、访问、合规风险均由个人自行判断并承担。培训方只提供学习路径与通用操作建议，不代购、不代付、不承诺任何第三方服务可用性。
              </Alert>
            </div>
          </section>

          <section id="contest" className="rounded-lg border border-line bg-white p-6 md:p-9">
            <SectionTitle
              eyebrow="Competition"
              title="第一期 AI 办公生产力提效大赛"
              description="以赛代练，把学习压力转化为可展示、可量化、可复用的成果，让管理层看到具体效率提升。"
            />
            <div className="grid gap-4">
              {contestRules.map((rule, index) => (
                <StepCard key={rule.title} index={index + 1} title={rule.title}>
                  {rule.detail}
                </StepCard>
              ))}
            </div>
          </section>

          <section id="templates" className="rounded-lg border border-line bg-white p-6 md:p-9">
            <SectionTitle
              eyebrow="Templates"
              title="参赛提交模板与评分表"
              description="把交付格式提前固定下来，员工按模板提交，管理层按同一把尺子评审。"
            />
            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-lg border border-line bg-surface p-5">
                <h3 className="font-semibold text-ink">提交模板</h3>
                <div className="mt-4">
                  <Checklist items={submissionTemplate} />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-line bg-white">
                <div className="grid grid-cols-[88px_1fr] border-b border-line bg-surface px-4 py-3 text-sm font-semibold text-ink md:grid-cols-[96px_92px_1fr]">
                  <span>维度</span>
                  <span className="hidden md:block">权重</span>
                  <span>标准</span>
                </div>
                {scoreRubric.map((row) => (
                  <div
                    key={row.item}
                    className="grid grid-cols-[88px_1fr] gap-3 border-b border-line px-4 py-4 text-sm leading-6 text-gray-700 last:border-b-0 md:grid-cols-[96px_92px_1fr]"
                  >
                    <span className="font-semibold text-ink">{row.item}</span>
                    <span className="hidden font-semibold text-brand md:block">{row.weight}</span>
                    <span>
                      <span className="mr-2 font-semibold text-brand md:hidden">{row.weight}</span>
                      {row.standard}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="rounded-lg border border-line bg-white p-6 md:p-9">
            <SectionTitle
              eyebrow="FAQ"
              title="基础问题自助排查"
              description="先看 FAQ，再按格式提问。重复问题统一回到这里，减少群内刷屏和一对一消耗。"
            />
            <div className="grid gap-4">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-lg border border-line bg-surface p-5">
                  <h3 className="font-semibold text-ink">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
