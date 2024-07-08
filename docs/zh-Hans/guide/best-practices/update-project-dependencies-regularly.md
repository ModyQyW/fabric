# 定期更新项目依赖

有不少人会选择锁定项目的依赖版本并停留在特定版本中，这样可以确保构建的可重复性，消除由于依赖项版本变化而导致的意外问题，使得构建更加可靠和可预测。CentOS 就是一个典型的例子，它会锁定一系列依赖的版本，比如 GCC，确保构建正常。

这种做法弊端非常明显。依赖中的已知错误、安全漏洞、性能问题会一直存在，后续因种种原因而需要升级依赖会变得更加困难。CentOS 锁定了 GCC 版本，导致依赖新版本 GCC 的工具无法正常编译，要么降级工具版本到一个已经没人维护的版本，要么手动编译更新 GCC，无论是哪一种做法都相当折磨。

我们鼓励定期更新项目依赖，这样可以防止版本漂移（项目依赖项与最新版本之间差距越来越大），保持项目稳定、安全和高效，这也是保持项目健康和安全的最佳实践。同时，为了避免更新依赖导致构建失败，可以新建 Git 分支来测试更新依赖后的构建，没有问题再进行合并。

你可以使用 [taze](https://github.com/antfu-collective/taze) 或 [npm-check-updates](https://github.com/raineorshine/npm-check-updates) 来更新项目依赖。

::: code-group

```shell [taze]
npx taze # 只检查，不写入
npx taze -r # 深入检查
npx taze -f # 不接受缓存地检查
npx taze -w # 写入文件
npx taze major # 只检查 major 版本号更新
npx taze minor # 只检查 minor 版本号更新
npx taze patch # 只检查 patch 版本号更新
```

```shell [npm-check-updates]
npx npm-check-updates # 只检查，不写入
npx npm-check-updates --deep # 深入检查
npx npm-check-updates -i # 只检查，不写入，交互式
npx npm-check-updates -u # 写入文件
npx npm-check-updates -t major # 只检查 major 版本号更新
npx npm-check-updates -t minor # 只检查 minor 版本号更新
npx npm-check-updates -t patch # 只检查 patch 版本号更新
```

:::
