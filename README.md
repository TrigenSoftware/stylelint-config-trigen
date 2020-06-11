# stylelint-config-trigen

[![NPM version][npm]][npm-url]
[![Node version][node]][node-url]
[![Peer dependencies status][peer-deps]][peer-deps-url]
[![Dependencies status][deps]][deps-url]
[![Build status][build]][build-url]
[![Dependabot badge][dependabot]][dependabot-url]

[npm]: https://img.shields.io/npm/v/stylelint-config-trigen.svg
[npm-url]: https://npmjs.com/package/stylelint-config-trigen

[node]: https://img.shields.io/node/v/stylelint-config-trigen.svg
[node-url]: https://nodejs.org

[peer-deps]: https://david-dm.org/TrigenSoftware/stylelint-config-trigen/peer-status.svg
[peer-deps-url]: https://david-dm.org/TrigenSoftware/stylelint-config-trigen?type=peer

[deps]: https://david-dm.org/TrigenSoftware/stylelint-config-trigen.svg
[deps-url]: https://david-dm.org/TrigenSoftware/stylelint-config-trigen

[build]: http://img.shields.io/travis/com/TrigenSoftware/stylelint-config-trigen.svg
[build-url]: https://travis-ci.com/TrigenSoftware/stylelint-config-trigen

[dependabot]: https://api.dependabot.com/badges/status?host=github&repo=TrigenSoftware/stylelint-config-trigen
[dependabot-url]: https://dependabot.com/

Trigen's stylelint config.

## Install

```bash
npm i -D stylelint-config-trigen
#or
yarn add -D stylelint-config-trigen
```

## Configure

Create `.stylelintrc` with next content:

```json
{
    "extends": "stylelint-config-trigen"
}
```

### Other configs

There are other configs for different syntax:

| Config | Description |
|--------|-------------|
| stylelint-config-trigen/css | Rules for CSS code. |
| stylelint-config-trigen/scss | Rules for SCSS code. |
| stylelint-config-trigen/stylable | Rules for Stylable code. |

Example:

```json
{
    "extends": [
        "stylelint-config-trigen"
        "stylelint-config-trigen/scss"
    ]
}
```
