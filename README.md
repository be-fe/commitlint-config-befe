# commitlint-config-befe

[![build status](https://img.shields.io/travis/be-fe/commitlint-config-befe/master.svg?style=flat-square)](https://travis-ci.org/be-fe/commitlint-config-befe)
[![Test coverage](https://img.shields.io/codecov/c/github/be-fe/commitlint-config-befe.svg?style=flat-square)](https://codecov.io/github/be-fe/commitlint-config-befe?branch=master)
[![NPM version](https://img.shields.io/npm/v/commitlint-config-befe.svg?style=flat-square)](https://www.npmjs.com/package/commitlint-config-befe)
[![NPM Downloads](https://img.shields.io/npm/dm/commitlint-config-befe.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/commitlint-config-befe)

> commitlint config preet for baidu BEFE.

## 安装

```bash
npm install commitlint-config-befe @commitlint/cli husky -D
```

## 使用

在 `package.json` 中书写：

```json
{
  "commitlint": {
    "extends": ["commitlint-config-befe"]
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
    }
  }
}
```

同时推荐 `npm install -g commitizen`
全局注入了 `git cz`，用来引导式书写规范的 commit message，十分适合于不熟悉的同学。

![](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

## Related

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) - 根据 commit message 生成 changelog
- [commitlint](https://github.com/marionebl/commitlint) - Lint commit messages
- [conventional-changelog-befe](https://github.com/be-fe/conventional-changelog-befe) - conventional-changelog 预设

## License

MIT
