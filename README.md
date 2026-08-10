# akagenorobin.github.io

https://akagenorobin.github.io/

[Astro](https://astro.build/) で作ったポートフォリオサイト。日本語（`/`）と英語（`/en/`）の2言語構成。

## セットアップ

```
npm ci
```

## ローカル実行

```
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的ファイルを出力
npm run preview  # ビルド結果を確認
npm run check    # 型チェック
```

## ディレクトリ構成

```
.
├── astro.config.mjs        # i18n ルーティング（ja はプレフィックスなし、en は /en/）と旧 URL の転送
├── public/                 # そのまま配信される静的ファイル
│   └── img/
├── src/
│   ├── components/         # UI コンポーネント
│   │   └── pages/          # ページ本体（ja/en 共用。locale を prop で受ける）
│   ├── content/posts/      # ICFP-PC 参加記（Markdown + 画像）
│   ├── content.config.ts   # 参加記のコレクション定義
│   ├── data/               # サイトの全コンテンツ（ja/en 併記の構造データ）
│   │   ├── profile.ts      # 学歴・職歴・スキル・プロダクト・コンテスト参加歴など
│   │   └── favorite.ts     # 音楽・ライブ参戦歴・文学など
│   ├── i18n/
│   │   ├── config.ts       # ロケール定義とパス変換
│   │   └── ui.ts           # UI 文言
│   ├── layouts/Base.astro  # <head> ・ヘッダー・フッター・テーマ切替
│   ├── pages/              # ルーティングのみ（ja: 直下、en: en/ 配下）
│   └── styles/global.css   # デザイントークンと共通スタイル
└── .github/workflows/      # main への push で gh-pages ブランチへデプロイ
```

## コンテンツの更新

文章やデータは `src/data/` の TypeScript ファイルに集約している。多言語テキストは
`{ ja: '…', en: '…' }` の形で持つので、両方を埋めれば両言語に反映される。

ページを追加する場合は `src/components/pages/` に本体を作り、`src/pages/` と
`src/pages/en/` の両方に `locale` を渡すだけのルートファイルを置く。

ブログとしては運用していないが、ICFP-PC の参加記だけは旧サイトと同じ
`/post/<日付>/` で残してあり、トップの「コンテストなど」から辿れる。
