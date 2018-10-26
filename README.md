# commitlint-config-befe (Deprecated)

## 迁移至 [GitHub](https://github.com/be-fe/commitlint-config-befe)

<!-- [![build status](https://img.shields.io/travis/imcuttle/commitlint-config-befe/master.svg?style=flat-square)](https://travis-ci.org/imcuttle/commitlint-config-befe)
[![Test coverage](https://img.shields.io/codecov/c/github/imcuttle/commitlint-config-befe.svg?style=flat-square)](https://codecov.io/github/imcuttle/commitlint-config-befe?branch=master)
[![NPM version](https://img.shields.io/npm/v/commitlint-config-befe.svg?style=flat-square)](https://www.npmjs.com/package/commitlint-config-befe)
[![NPM Downloads](https://img.shields.io/npm/dm/commitlint-config-befe.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/commitlint-config-befe) -->

commitlint config preet for baidu BEFE.

## 安装

```bash
npm install commitlint-config-befe @commitlint/cli husky
```

## 使用

在 `package.json` 中书写：

```json
{
  "scripts": {
    "commitmsg": "commitlint -e $GIT_PARAMS"
  },
  "commitlint": {
    "extends": ["commitlint-config-befe"]
  }
}
```

同时推荐 `npm install -g commitizen`
全局注入了 `git cz`，用来引导式书写规范的 commit message，十分适合于不熟悉的同学。

![](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

## Related

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) - 根据 commit message 生成 changelog
- [commitlint](https://github.com/marionebl/commitlint) - Lint commit messages
- [@baidu/conventional-changelog-befe](http://gitlab.baidu.com/be-fe/conventional-changelog-befe) - conventional-changelog 预设

## License

MIT
