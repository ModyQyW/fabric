# Git 概述

Git 是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小到大的项目。使用 Git 可以在大量场景下高效协作。

## Git 工作流程

- [Git flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [GitLab flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)
- [One Flow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow)

## Git 推荐配置

```shell
# 阻止自动转换 CR LF
git config --global core.autocrlf false

# 阻止忽略大小写
git config --global core.ignorecase false

# 指定默认分支名为 main
git config --global init.defaultBranch main
```

对于 SSH 密钥，可以查阅 [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)，它也适用于其它 git 系统，比如 [GitLab](https://gitlab.com/)。

`.gitignore` 例子可以查阅 [这里](https://github.com/ModyQyW/fabric/blob/main/.gitignore)。
