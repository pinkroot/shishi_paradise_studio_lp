# Sushi Paradise Studio — Official Landing Page

Cyber Funky Food EDM の公式LP。ビルド不要の静的サイト（HTML/CSS/JS のみ）。

## 構成

```
index.html        # 1ページLP（Hero / Listen Now / All Tracks / About）
css/style.css     # ネオンサイン様式（濃紺→黒＋グレイン、アウトラインネオン）
js/main.js        # 39曲データ・EN/JA切替・MVモーダル
assets/logo.png   # ロゴ
assets/jackets/   # ジャケットサムネイル 001–039（600px JPEG）
```

- 言語: 英語が既定。ヘッダー右上のボタンで日本語に切替（localStorage に保存）。
- 楽曲グリッド: 001–020 はクリックで YouTube MV をモーダル再生、
  021–039 は Spotify アーティストページへリンク。
- Listen Now: Spotify アーティスト埋め込み＋MV埋め込み（TACOS Overdose）。

## ローカルプレビュー

```bash
cd ~/works/sushi-paradise-lp
python3 -m http.server 8080
# → http://localhost:8080
```

## Cloudflare Pages へのデプロイ

ビルドステップ不要（静的サイト）。

### 方法A: GitHub 連携（推奨・push で自動デプロイ）

1. GitHub にリポジトリを作成して push:
   ```bash
   gh repo create sushi-paradise-lp --private --source . --push
   ```
2. Cloudflare ダッシュボード → **Workers & Pages → Create → Pages → Connect to Git**
3. リポジトリ `sushi-paradise-lp` を選択
4. ビルド設定:
   - Framework preset: **None**
   - Build command: （空欄）
   - Build output directory: `/`
5. **Save and Deploy** → `https://<project>.pages.dev` が発行される
6. カスタムドメインは Pages プロジェクトの **Custom domains** から追加

### 方法B: Wrangler で直接アップロード

```bash
npm i -g wrangler
wrangler login
wrangler pages deploy . --project-name sushi-paradise-lp
```

## 更新手順（新曲追加）

1. ジャケットを 600px JPEG に変換して `assets/jackets/NNN.jpg` に置く:
   ```bash
   sips -s format jpeg -s formatOptions 82 -Z 600 <元画像> --out assets/jackets/NNN.jpg
   ```
2. `js/main.js` の `SONGS` 配列に `{ no: "NNN", title: "...", yt: "<MV ID>" }` を追加
   （MV未公開なら `yt: null`）
3. commit → push（方法Aなら自動デプロイ）
