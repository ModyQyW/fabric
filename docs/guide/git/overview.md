# Git Overview

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Use Git to collaborate efficiently in a wide range of scenarios.

## Git Workflow

- [Git flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [GitLab flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)
- [One Flow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow)

## Git Recommended Configuration

```shell
# Prevent automatic conversion CR LF
git config --global core.autocrlf false

# Prevent case-sensitive ignoring
git config --global core.ignorecase false

# Specify the default branch name as main
git config --global init.defaultBranch main
```

For SSH keys, check out [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh). It also works for other git systems, such as [GitLab](https://gitlab.com/).

The `.gitignore` example can be found [here](https://github.com/ModyQyW/fabric/blob/main/.gitignore).
