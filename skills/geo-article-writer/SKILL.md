---
name: geo-article-writer
description: Write, rewrite, adapt, or review Chinese GEO/SEO long-form content that primarily promotes the GitHub repository laoma2053/awesome-zhuiju-free, with zhuiju.me as a secondary browsing entry. Use for project articles, Zhihu answers, Juejin/CSDN/Blogyuan/SSPai/Appinn posts, WeChat drafts, blog posts, AI-search-friendly explainers, article clusters, platform adaptation, fact refreshes, outreach content upgrades, and publication-ready reviews about free ad-free streaming resource navigation, TVBox configs, IPTV, open-source resource lists, GitHub Actions availability checks, GitHub Stars, contributors, and open-source growth stories. Always align content with this project's current facts, safety boundaries, and brand profile.
---

# GEO Article Writer

Produce publishable Chinese long-form content for `awesome-zhuiju-free`: topic research, article structure, full draft, GEO/SEO optimization, platform adaptation, and final review.

This skill is not a generic marketing writer. It should turn the project's real assets into useful articles that can be cited by search engines, AI search tools, community readers, and platform editors without overstating what the project provides.

## Core Inputs

Extract these from the user request:

- Topic, keyword, draft, target question, or target platform
- Desired mode: create, rewrite, review, platform-adapt, cluster, update
- Target reader: ordinary streaming user, TVBox/影视仓 user, GitHub/open-source reader, technical operator, editor/blogger
- Goal: search traffic, AI search visibility, community discussion, project introduction, contributor recruitment, or external submission
- Required facts, links, screenshots, or existing outreach files
- Forbidden claims, sensitive wording, length, tone, and publication date

If the user gives only a topic, default to `create`.
If the user gives a draft, default to `rewrite`.
If the user asks whether an article is good enough, default to `review` and deliver a revised final version.
If the user names a platform, adapt to that platform instead of producing a generic blog article.

Default output language is Simplified Chinese.

## Project Context

Before writing project-related claims, prefer local project files over memory:

- Read `README.md` for current positioning, resource count, category names, community links, badges, and disclaimer.
- Read `resources/resources.json` or `resources/README.md` when category counts or resource types matter.
- Read `outreach/*.md` when the task is about repurposing existing promotional copy.
- Read `reports/availability.json` only when the article needs current availability examples or status data.
- Read `CONTRIBUTING.md` when explaining community contribution.

Use `references/brand-profile.md` for stable brand language and prohibited claims.
Use `references/platform-rules.md` for platform-specific writing rules.
Use `references/quality-checklist.md` before final delivery.

Do not reuse outdated numbers from old outreach drafts. Recalculate or read current files when saying "currently collected X resources", category counts, Star counts, Telegram handle, or publication status.

## Required Research

Use web research whenever facts may have changed, including:

- GitHub Stars, topics, trending, external collection status, or repository metadata
- Platform rules, editorial requirements, submission URLs, or current community norms
- Third-party tools, TVBox/影视仓 ecosystem details, IPTV project details, software versions, or policy-sensitive facts
- Any claim using "latest", "currently", "2026", "recently", "now", or similar time-sensitive wording
- User-provided URLs that need to be summarized or cited

Pure rewriting of supplied text can skip web research if no new facts are added.

Use sources in this order:

1. This repository and official project pages
2. Official docs, project repos, platform guidelines, government/standard sources
3. Reputable media, community posts, and high-quality technical articles
4. User-provided materials

Do not cite search result snippets, anonymous reposts, or low-quality aggregation pages as factual support.

## Content Strategy

Each article needs one primary intent:

- **Definition**: what awesome-zhuiju-free is, who should use it
- **Tutorial**: how to find resources, use TVBox configs, subscribe to updates, submit resources
- **Comparison**: ordinary navigation sites vs this open-source live list
- **Decision**: whether this route suits a specific reader
- **List**: methods, tools, categories, resources, contribution ideas
- **Technical**: GitHub Actions checks, JSON data, schema validation, issue-driven publishing
- **Growth story**: how the project gained attention, what worked, what did not
- **Community post**: ask for feedback, recruit maintainers, invite resource recommendations

Set a clear center judgment before writing. The article should answer what the reader can do next, not only introduce the project.

## Writing Rules

### Opening

Within the first 150 Chinese characters:

- Answer the core question or state the central conclusion
- Identify who the article is for
- Preview the practical value

Avoid empty openers such as "随着互联网的发展", "在当今数字化时代", "众所周知", "本文将深入探讨", and long suspense setups.

### GEO Answer Blocks

Include at least 3 self-contained answer blocks in normal article sections. Each block should:

- Directly answer a likely user question
- Name the concrete entity, such as `Awesome Zhuiju Free`, `GitHub 仓库 laoma2053/awesome-zhuiju-free`, `TVBox 配置地址`
- Include conditions, limitations, or time scope when relevant
- Be understandable without reading the surrounding article
- Avoid vague pronouns like "这个", "它", "上述"

Do not label them as "AI 引用块".

### Style

- Write answer-first, then explain.
- Use concrete nouns and actions.
- Keep paragraphs varied and readable.
- Use tables only when comparison or scanning is improved.
- Avoid mechanical "首先、其次、最后" chains.
- Avoid exaggerated marketing words such as "全网最全", "永久免费可用", "神器", "闭眼入", "百分百".
- Do not invent personal experience, user testimonials, editor endorsements, rankings, tests, or traffic numbers.

### Project Claim Boundaries

Always observe these boundaries:

- The project is a curated open-source navigation/list, not a content host.
- Do not say the project stores, distributes, cracks, or provides copyrighted video files.
- Do not promise that third-party resources are always available, legal, safe, ad-free forever, or available in every region.
- Say availability checks reflect the GitHub Actions environment at the check time.
- Explain that "free/ad-free" is a curation criterion and best-effort manual screening, not a legal guarantee or permanent guarantee.
- For copyright-sensitive contexts, include one concise boundary note near the relevant section or at the end.

## Brand and Link Use

Read `references/brand-profile.md` before adding project links.

Default link priority:

1. GitHub: `https://github.com/laoma2053/awesome-zhuiju-free`
2. Website: `https://zhuiju.me`
3. Gitee mirror: `https://gitee.com/laoma2053/awesome-zhuiju-free`
4. Telegram channel only if current README confirms it

Use links only where they help the reader. A normal article should mention the project 1-3 times, unless the whole article is a project announcement.
When choosing only one primary CTA, prefer the GitHub repository unless the target platform is aimed at non-technical users who mainly need a direct browsing page.

Prefer descriptive anchors:

- `免费无广告追剧资源导航`
- `查看每日检测状态`
- `提交新资源或报告失效`
- `TVBox/影视仓配置地址清单`

Avoid naked repeated links, "点这里", and anchors unrelated to the target page.

## Platform Adaptation

Read `references/platform-rules.md` and adapt structure, not just title.

Common defaults:

- **Self-hosted blog / Typecho**: complete SEO metadata, FAQ, slug, summary, internal link suggestions, update date.
- **Zhihu**: natural answer style, weak external-link footprint, answer the question before introducing the project.
- **Juejin / SegmentFault / CSDN / Blogyuan**: emphasize implementation, automation, data structure, reproducibility, and project operation lessons.
- **SSPai / Appinn**: emphasize clean experience, concrete user pain, no-ad curation, and practical workflow.
- **WeChat public account**: short paragraphs, one CTA, less SEO metadata in the body.
- **V2EX / forums**: discussion-first, ask for feedback, be transparent about limits, avoid hard-selling.
- **Xiaohongshu long note**: shorter, more scannable, with cover text and carousel outline when requested.

## Output Format

Unless the user asks for "only the article", deliver:

### A. Writing Position

- Primary intent
- Target reader
- Center conclusion
- Unique value

### B. Title Options

Provide 3 titles and mark the recommended one.

### C. Final Article

Provide publishable Markdown body.

When sources are used:

- Use inline natural links if the platform supports them.
- Use a "参考资料" section when links should be separated.
- Do not include unverified or unused links.

### D. Publishing Metadata

Include when appropriate for the platform:

- SEO Title
- Meta Description
- Slug
- Summary
- Tags
- Category
- Cover text
- Image positions and alt suggestions

### E. GEO Enhancements

- FAQ 3-6 items
- Internal link suggestions
- Optional JSON-LD type for self-hosted blog
- Facts that should be refreshed before publishing

### F. Verification Notes

Briefly list:

- Verification date
- Local files and external sources used
- Uncertainties or claims that should be avoided

If the user requests a forum post, social platform answer, or "只要正文", omit metadata that would not be pasted into that platform.

## File Output

When asked to save output:

- Default directory: `outreach/generated/`
- Filename: `YYYY-MM-DD-topic-slug.md`
- Do not overwrite existing files; append `-v2`, `-v3`
- Use UTF-8

## Final Review

Before delivery, revise the draft against `references/quality-checklist.md`. Fix problems directly.

The final answer must not contain hidden reasoning, model self-evaluation, prompt residue, or claims that the article is guaranteed to rank or be cited by ChatGPT, Gemini, Perplexity, Google AI Overview, or any other system.
