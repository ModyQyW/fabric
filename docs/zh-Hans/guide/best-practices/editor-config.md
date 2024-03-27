# EditorConfig

[EditorConfig](https://editorconfig.org/) 有助于跨不同编辑器和 IDE 处理同一项目的多个开发人员保持一致的编码风格。

## 配置

```shell
# .editorconfig
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

```

## 整合

### VSC

安装 [对应的 EditorConfig 插件](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) 即可。

### WebStorm

WebStorm 自带 EditorConfig。
