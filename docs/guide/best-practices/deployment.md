# Deployment

Experience has proven that automated deployment is the best choice for deployment.

For both service provider-hosted and self-hosted Git projects, you can use the services provided by your service provider, or automate deployment using [Zeabur](https://zeabur.com?referralCode=ModyQyW), [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), etc. to automate deployment.

In addition to this, you may need to use conventionally commit-related tools to complement the capabilities offered by your service provider. Here are some **subjective** choices.

- [auto-changelog](https://github.com/CookPete/auto-changelog)
- [bumpp](https://github.com/antfu/bumpp)
- [changelogen](https://github.com/unjs/changelogen)
- [changelogithub](https://github.com/antfu/changelogithub) - Recommended
- [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version)
- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) - Recommended
- [keep-a-changelog](https://github.com/oscarotero/keep-a-changelog)
- [np](https://github.com/sindresorhus/np)
- [release](https://github.com/vercel/release)
- [release-it](https://github.com/release-it/release-it) - Recommended
- [release-please](https://github.com/googleapis/release-please)
- [semantic-release](https://semantic-release.gitbook.io/semantic-release/)

For monorepo, the above tools are not particularly suitable. Here are some **subjective** options specifically for monorepo.

- [changesets](https://github.com/changesets/changesets)
- [lerna](https://lerna.js.org/)
- [lerna-lite](https://github.com/lerna-lite/lerna-lite) - Recommended
- [nx](https://nx.dev/)
- [rush](https://rushjs.io/)
- [turborepo](https://turbo.build/repo/docs)
