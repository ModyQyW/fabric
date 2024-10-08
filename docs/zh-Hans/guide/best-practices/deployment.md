# 部署

经验证明，自动化部署是部署的最佳选择。

对于服务商托管和自托管的 Git 项目，你可以使用服务商提供的服务，或使用 [Zeabur](https://zeabur.com?referralCode=ModyQyW)、[Netlify](https://www.netlify.com/)、[Vercel](https://vercel.com/) 等来实现自动化部署。

除此之外，你可能还需要使用约定式提交相关的工具，来配合服务商提供的能力。以下是一些主观选择。

- [auto-changelog](https://github.com/CookPete/auto-changelog)
- [bumpp](https://github.com/antfu/bumpp)
- [changelogen](https://github.com/unjs/changelogen)
- [changelogithub](https://github.com/antfu/changelogithub) - 推荐
- [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version)
- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) -
- [keep-a-changelog](https://github.com/oscarotero/keep-a-changelog)
- [np](https://github.com/sindresorhus/np)
- [release](https://github.com/vercel/release)
- [release-it](https://github.com/release-it/release-it) - 推荐
- [release-please](https://github.com/googleapis/release-please)
- [semantic-release](https://semantic-release.gitbook.io/semantic-release/)

对于 monorepo，以上工具并非特别合适。以下是一些专门针对 monorepo 的主观选择。

- [changesets](https://github.com/changesets/changesets)
- [lerna](https://lerna.js.org/)
- [lerna-lite](https://github.com/lerna-lite/lerna-lite) - 推荐
- [nx](https://nx.dev/)
- [rush](https://rushjs.io/)
- [turborepo](https://turbo.build/repo/docs)
