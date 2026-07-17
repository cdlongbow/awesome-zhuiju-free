# Platform Rules

Adapt the same topic to the target platform. Do not merely change the title.

## Self-hosted Blog / Typecho

Goal: search traffic plus AI-search-friendly answers.

- Use one H1 title, H2/H3 body.
- Put the direct answer in the first 150 Chinese characters.
- Include 3+ answer-first sections.
- Add FAQ when it reflects real reader questions.
- Include SEO Title, Meta Description, Slug, summary, tags, category, and image alt suggestions.
- Suggest Article or BlogPosting JSON-LD; suggest FAQPage only when FAQ is substantial.
- Include "最后核验：YYYY-MM-DD" for time-sensitive counts or platform facts.
- Add 1-3 natural links, with the GitHub repository as the default primary link and zhuiju.me as a secondary browsing link.

## Zhihu

Goal: answer the question convincingly without looking like an ad.

- Start with a direct judgment or practical answer.
- Mention the project only after giving standalone value.
- Usually use at most one external link in the answer body; use the GitHub repository by default unless the answer is purely for ordinary users who need direct browsing.
- Avoid SEO metadata, Schema, and promotional slogans.
- Use fewer headings than a blog article.
- Include tradeoffs, limitations, and alternative methods.
- Do not ask for Star unless the question itself is about open-source support.

## Juejin / SegmentFault

Goal: technical story, implementation logic, or growth review.

- Prefer topics such as GitHub Actions availability checks, structured JSON data, schema validation, issue-driven workflow, README conversion, and open-source growth.
- Explain the problem, design choices, implementation outline, and tradeoffs.
- Include code snippets only when they are accurate and useful.
- Mark example code as simplified if not copied from repository.
- Include what did not work or what remains limited when writing a growth review.
- End with a useful principle or next step, not just a project link.

## CSDN / 51CTO / Blogyuan

Goal: reproducible technical documentation.

- State environment, files, workflow, and expected result.
- Keep commands copyable and explain where to run them.
- Include verification and rollback/repair advice when editing workflows.
- For GitHub Actions or platform behavior, verify current docs if version-sensitive.
- Use troubleshooting tables for failures.
- Avoid filler background and non-technical promotion.

## SSPai Matrix

Goal: practical tool article for readers who value clean experience.

- Start from a real everyday pain point.
- Explain the workflow: open page, scan status, choose category, submit issue if needed.
- Emphasize clean, open, transparent, and maintained.
- Keep technical explanation short and readable.
- Use screenshots: README first screen, resource table with status, website browsing view.
- End with a concise boundary note, not aggressive CTA.

## Appinn / 小众软件

Goal: concise discovery post for clean tools.

- Format like a software recommendation.
- Lead with labels such as `免费`、`开源`、`Web`.
- Focus on no-ad curation, daily checks, and direct use without registration.
- Keep language restrained; do not ask for Star.
- Include platform, price, website, GitHub, and tags if needed.

## V2EX / NodeSeek / HostLoc / Forums

Goal: discussion and feedback, not one-way advertising.

- Use first-person project context only if true or supplied by the user.
- Ask concrete questions: categories to add, README clarity, TVBox configs, maintainers.
- Be transparent about copyright and availability limitations.
- Avoid "求 Star", "全网最全", and repeated links.
- Keep the tone direct and community-native.

## WeChat Public Account

Goal: readable article or editor-ready contribution.

- Use short paragraphs and clear section headings.
- Keep one CTA. Prefer GitHub Star, GitHub repository visit, or GitHub Issue contribution; use website browsing CTA only for non-technical resource/tool accounts.
- Put references at the end if needed.
- Avoid dense SEO keyword repetition.
- For GitHub-oriented accounts, include the technical differentiation and growth angle.
- For resource/tool accounts, focus on the user pain and daily availability check.

## Xiaohongshu Long Note

Goal: scannable note with save/share value.

- Keep the main text around 600-1200 Chinese characters unless requested otherwise.
- First 100 characters must state who it helps and what problem it solves.
- Use practical labels: 免费追剧、无广告、TVBox配置、电视盒子、资源失效.
- Provide cover text and 3-6 page carousel outline when requested.
- Avoid dense external links; direct readers to search the project name or the GitHub repository name if link placement is limited. Mention zhuiju.me only as the direct browsing entry.

## Blogger / Editor Pitch

Goal: make forwarding or coverage easy.

- Provide a short personal note plus a ready-to-publish blurb.
- Include 3 facts: what it is, why it is different, where to see it.
- Keep the ask lightweight.
- Do not overstate Star growth, media coverage, or uniqueness.
