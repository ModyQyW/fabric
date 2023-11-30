# Formatter

Formatters are tools that only care about code style, not code quality, and have limited configurable items. Using a formatter saves time arguing about code style and makes the project and team code style uniform.

[Prettier](./prettier.md) is a widely-adopted code formatter with good support for JavaScript / TypeScript / JSX / TSX / CSS / SCSS / Vue, and it's my top pick for formatters.

[Biome](./biome.md) and [dprint](./dprint.md) are the up-and-comers. Tou might consider using them if you think Prettier is slow. But be careful: they are not 100% compatible with Prettier and you may get unexpected results.

::: warning Don't mix code formatters
Under no circumstances should you mix multiple code formatters on production code.
:::
