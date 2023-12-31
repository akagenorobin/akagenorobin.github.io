# akagenorobin.github.io

https://akagenorobin.github.io/

## 利用パッケージ

https://github.com/gohugoio/hugo

## git clone

サブモジュールを使っているので `--recursive` を付ける

```
git clone --recursive
```

普通に clone してしまった場合は以下を実行する

```
git submodule update --init --recursive
```

## ディレクトリ構成

```
.
├── README.md
├── archetypes
│   └── default.md
├── content
│   ├── _index.md
│   ├── about
│   │   └── index.md
│   └── post
│       └── yyyy-mm-dd
│           ├── index.md
│           └── fig_1.png
├── hugo.toml
├── i18n
│   └── ja.yaml
├── static
│   ├── css
│   │   └── main.css
│   └── img
│       ├── avatar-icon.png
│       └── favicon.ico
└── themes
    └── beautifulhugo
```

記事を追加する場合は `content/post` 配下にディレクトリを切る  
ページを追加する場合は `content` 直下にディレクトリを切る

## ローカル実行

```
hugo server
```
