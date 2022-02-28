# 文档编写格式约定 Convention

## 存放形式

- 所有文档存放于 `documentation` 目录下；
- 按照对应的模块可建立对应的子目录，如 `core`；
- 文档格式均为 `Markdown(.md)`；
- 命名遵循 `${序号}.${英文简写，空格由_代替}}.md` 的格式；
- 编写完成的文档需要补充到外层 README 的目录中。

## 语言与排版

- 所有文档的第一语言均为**中文**；
- 文字排版请遵守 [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)；
  - 亦可参考进行过修订的 [这篇](https://github.com/mzlogin/chinese-copywriting-guidelines)；
  - 其中的争议部分，如非必要，建议仍参照执行，减少因个人习惯造成的风格差异。
- Markdown 编写第一行格式为 `# ${中文标题} ${英文标题，首字母大写}`；
- Markdown 文件使用 [markdownlint](https://github.com/DavidAnson/markdownlint) 确保格式正确。
  - [Visual Studio Code 插件](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) 十分有用。

## 习惯要求

- 请在编写时一直使用 `一般时态` 和 `第二三人称`，避免使用 `我`、`我们` 以及所在组织的名称；
- 文档风格参考 [中文技术文档写作风格指南](https://zh-style-guide.readthedocs.io/zh_CN/latest/)。

## 归档规则

- 文档的最新版本应当被更新到 `master` 分支；
- `master` 分支的最新 `HEAD` 应当是唯一有效的版本；
- 新的文档草稿通过以 `draft/` 开始的临时分支予以管理和协作，按里程碑管理；
- 正式文档通过以 `wip/` 开始的临时分支予以管理和协作，较小的改动可以通过 `Pull Request` 机制予以提交；
- 相关历史文档的归档通过 `Git Tag` 形式予以保留。
