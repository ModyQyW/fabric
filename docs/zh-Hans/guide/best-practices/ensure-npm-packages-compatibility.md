# 确保 NPM 包兼容性

NPM 包，或者说 JavaScript 库，可能在各类环境中运行。如果它不支持某些环境，那么用户就会抱怨，甚至不再使用。也因此，确保跨环境的最广泛兼容性非常重要。

[打包 JavaScript 库的现代化指南](https://github.com/frehner/modern-guide-to-packaging-js-library) 就是一个很好的参考，它提供了每个库和打包工具（或不用打包工具）都适用的事项。

基于此，你可以使用 [publint](https://github.com/bluwy/publint) 来校验你的 NPM 包兼容性，或者使用 [它的在线版本](https://publint.dev/)。

```shell
# 检验你的包
# 如果需要打包，你需要先打包
$ npx publint

# 检验你项目 package.json 依赖
$ npx publint deps
```

此外，[@arethetypeswrong/cli](https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/packages/cli/README.md) 分析 npm 包内容中的 TypeScript 类型问题，特别是与 ESM 相关的模块解析问题，你也可以使用 [它的在线版本](https://arethetypeswrong.github.io/)。

```shell
# 检验你的包
# 如果需要打包，你需要先打包
npx @arethetypeswrong/cli

# 也可以尝试以下命令
npx @arethetypeswrong/cli --pack .
```
