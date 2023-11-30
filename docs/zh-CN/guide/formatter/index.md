# 代码格式化器 Formatter

代码格式化器是只关心代码风格、不关心代码质量的工具，可配置项有限。使用代码格式化器可以节省代码风格的争论时间，使项目和团队代码风格统一。

[Prettier](./prettier.md) 是被广泛采用的代码格式化器，它对 JavaScript / TypeScript / JSX / TSX / CSS / SCSS / Vue 支持良好，也是我首推的代码格式化器。

[Biome](./biome.md) 和 [dprint](./dprint.md) 是后起之秀。如果你认为 Prettier 速度比较慢，你可以考虑使用它们。但必须留意：它们和 Prettier 并不是 100% 兼容的，你可能会得到意想不到的结果。

::: warning 不要混用代码格式化器
在任何情况下，你都不应该在生产代码上混用多个代码格式化器。
:::
