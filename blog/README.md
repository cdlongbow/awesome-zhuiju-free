# Typecho 博客文章库

这个目录用于存放未来发布到 Typecho 博客的文章。每篇文章都按「用文本编辑器打开文件，复制 Markdown 原始内容到 Typecho 即可发布」的目标编写，尽量减少发布前二次整理。

## 目录约定

```text
blog/
├── README.md              # 写作与发布规范
├── _template.md           # Typecho 文章模板
└── articles/              # 正式文章或待发布草稿
```

文章文件建议放在 `articles/` 目录，命名格式：

```text
YYYY-MM-DD-文章主题.md
```

示例：

```text
2026-07-12-awesome-zhuiju-free-guide.md
```

## Typecho 复制规范

发布时建议用 VS Code、记事本或其他文本编辑器打开 `.md` 文件，复制原始 Markdown 内容到 Typecho 编辑器。不要从 GitHub 预览页、浏览器渲染页或聊天窗口的预览效果里复制，否则 Markdown 标题、表格和列表可能会丢失。

文章文件直接从 `# 标题` 开始，不在顶部放 HTML 注释、发布检查项或其他不会展示给读者的内容。标题、分类、标签、Slug 和摘要在 Typecho 后台填写。

正文中可以保留：

- `<!--more-->`：Typecho 摘要分隔符。
- Markdown 标题、列表、表格、引用、代码块。
- 需要网友复制的地址，建议用代码格式包起来，例如 `` `http://example.com/config.json` ``。

## 推荐文章结构

一篇教程文章建议使用下面的节奏：

1. 先讲用户痛点：为什么需要这个教程。
2. 给出结论：读者能得到什么。
3. 分步骤操作：每一步尽量有明确动作。
4. 补充常见问题：减少评论区重复解释。
5. 结尾给入口：网站、GitHub、反馈渠道。

## 发布前检查

- 标题是否具体，避免只写「使用教程」。
- 首屏 3 段内是否说明了文章价值。
- 每个步骤是否能独立照做。
- 外部链接是否完整；需要网友复制的地址不要做成超链接。
- 是否包含 `<!--more-->`。
- 是否避免承诺「永久可用」「绝对安全」这类不准确表达。
- 是否说明资源可用性会随时间变化。

## 常用项目入口

- 网站：https://zhuiju.me
- GitHub：https://github.com/laoma2053/awesome-zhuiju-free
- Gitee 镜像：https://gitee.com/laoma2053/awesome-zhuiju-free
- 推荐新资源：https://github.com/laoma2053/awesome-zhuiju-free/issues/new?template=resource.yml
- 报告失效：https://github.com/laoma2053/awesome-zhuiju-free/issues/new?template=broken-link.yml
