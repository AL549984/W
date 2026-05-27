# AI 提效训练营

面向团队的 AI 降本增效教程站，采用 Next.js + Tailwind CSS 构建，内容覆盖：

- 快速入门：Waytoagi 认知指引、飞书表单打卡规范
- 国产 AI 工具提效：豆包洗稿流程、Coze 业务 Bot 搭建 SOP
- 进阶操作：Gemini 账号环境配置与商业免责声明
- 管理机制：AI 办公生产力提效大赛、飞书多维表格自动化流水线
- 部署交付：GitHub、Vercel、独立二级域名 CNAME 配置

## 本地运行

```bash
npm install
npm run dev
```

默认访问地址：

```text
http://localhost:3000
```

## 构建检查

```bash
npm run build
```

## 内容维护

核心内容集中在：

```text
content/training.ts
```

页面结构集中在：

```text
app/page.tsx
```

如果后续需要接入 MDX、CMS 或飞书知识库，可先保留当前页面结构，再把 `content/training.ts` 替换为动态数据源。

## Vercel 部署

1. 创建 GitHub 仓库，例如 `qmt-ai-training-docs`。
2. 推送当前项目到 `main` 分支。
3. 在 Vercel 导入该仓库，Framework Preset 选择 `Next.js`。
4. Build Command 使用默认值：

```bash
npm run build
```

5. 部署成功后，在 Vercel Project Settings / Domains 添加独立二级域名。

## 独立二级域名 CNAME

以 `ai-training.example.com` 为例：

```text
Type: CNAME
Name: ai-training
Value: cname.vercel-dns.com
```

DNS 生效后，回到 Vercel 检查域名状态和 HTTPS 证书。证书正常后再对外发布，不建议直接传播 `*.vercel.app` 默认域名。

## 飞书自动化建议

飞书多维表格字段建议包含：

- 姓名
- 日期
- 今日研学工具
- 任务场景
- 成果链接
- 提示词或 Bot 链接
- 节省时间估算
- 质量自评

推荐自动化：

- 每天 18:30 汇总当日新增打卡记录
- 自动发送群机器人简报
- 每周导出排行榜
- 将优秀案例沉淀到教程站或飞书知识库
