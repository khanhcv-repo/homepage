---
name: gen-ui-homepage
description: Kỹ năng "Master Blueprint" chứa toàn bộ mã nguồn chuẩn, thông số thiết kế (Teal/Orange) và logic kỹ thuật của trang chủ NeuroShin AI. Dùng để generate mã nguồn chính xác 100% so với UI hiện tại.
---

# 📖 Master Blueprint: NeuroShin AI Homepage Content & Logic

Kỹ năng này định nghĩa cấu trúc chuẩn và toàn bộ nội dung văn bản (linh hồn) của trang chủ. Agent phải tuân thủ nghiêm ngặt các thông số này.

## 1. Thông tin chung (Brand Identity)
- **Company Name**: `NeuroShin AI`
- **Corporate Slogan**: `“より深く考え、より賢く成長する”`
- **Core Domain**: `NeuroShin AIは、企業や個人が業務を自動化し、生産性を向上させ、かつてないほど正確な意思決定を行えるよう支援する画期的なAI製品を開発しています。`

## 2. Chi tiết nội dung từng Section

### 2.1 Navbar
- **Menu Items**: `AI製品`, `選ばれる理由`, `お客様の声`, `料金プラン`, `ニュース`
- **CTA**: `無料で始める`
- **Sub-badge**: `日本テクノロジー`

### 2.2 Hero Section
- **Heading**: `NeuroShin AI`
- **Sub-text**: Slogan (mục 1).
- **CTA 1**: `無料体験` (#pricing)
- **CTA 2**: `開発者に問い合わせる` (#contact)
- **Trust Metrics**: `APPI準拠`, `ISO 27001 セキュリティ`, `100% オンプレミス対応`
- **Partner Marquee**:
  - **Title**: `アジアを代表する信頼のテクノロジーパートナー`
  - **Client List**: `Rakuten`, `NTT DATA`, `mercari`, `SUNTORY`, `LINE`, `docomo`, `Money Forward`, `YAHOO! JAPAN`.
  - **Behavior**: Hiệu ứng cuộn ngang vô tận (Infinite Marquee).

### 2.3 AI Services (テクノロジー領域)
- **Section Heading**: `包括的なAI製品ポートフォリオ`
- **Services List**:
  1. `AIチャットボット＆バーチャルアシスタント`: 文脈を理解し... (xem data.ts)
  2. `AIデータ分析`: 企業の生のデータ資産を...
  3. `AIコンテンツ生成`: SEOに強い記事の執筆...
  4. `AI画像認識`: 画像や動画を高速で処理...
  5. `AI予測＆最適化`: リソースを最適化し...
  6. `AIセキュリティ`: 自己学習型の機械学習モデル...

### 2.4 Stats (実績指標)
- `50,000+` / `導入企業数`
- `99.9%` / `稼働率コミットメント`
- `3秒` / `平均応答時間`
- `120+` / `展開国数`
- `Asia Pacific` / `AI Innovation Award 2024`

### 2.5 Featured Products (主力製品)
- **Heading**: `NeuroShin の主力製品`
- **Products**:
  - `ShinChat Pro`: `多言語に最適化された次世代AI対話アシスタント` (¥19,800/月)
  - `DataShin Analytics`: `オールインワンのAI data phân tích platform` (¥29,800/月)
  - `ShinVision`: `Real-time analysis AI Computer Vision` (¥39,800/月)
  - `ContentShin Studio`: `AI Multimedia content production studio` (¥9,800/月)

### 2.6 Advantages (选ばれる理由)
- **Heading**: `なぜ NeuroShin AI なのか？`
- **Points**: `独自開発의 AIモデル`, `日本語への深い最適化`, `絶対的なデータセキュリティ`, `容易かつ柔軟な統合`, `継続的な自己学習`, `マンツーマンの導入支援`.

### 2.7 Pricing (料金プラン)
- **Heading**: `売上 を飛躍させるパートナーシップ料金プラン`
- **Plans**: 
  - `スタータープラン` (¥6,600/月)
  - `ビジネスプラン` (¥26,400/月 - *Most Popular*)
  - `エンタープライズプラン` (お問い合わせ)
- **Logic**: Discount 20% khi bật `年払い`.

### 2.8 Testimonials (お客様の声)
- **Authors**: `Yamamoto Kenji` (Rakuten), `Tanaka Yuki` (COO, SoftBank), `Nakamura Hiroshi` (CEO, FinLink).

### 2.9 News (研究・ニュースセンター)
- **Latest**: `NeuroShin AI、日本語に最適化された大規模言語モデル「JaLLM 2.0」を正式リリース。`

### 2.10 Newsletter & Footer
- **Newsletter Heading**: `毎週のAIトレンドアップデート – 完全無料`
- **Contact Email**: `hello@neuroshin-ai.co.jp`
- **Address**: `〒100-0005 東京都千代田区丸の内1丁目9番2号 グラントウキョウサウスタワー 18F`

## 3. Quy tắc Kỹ thuật (Technical Specs)
- **Colors**: Teal (`#25A69A`), Orange (`#FF5A36`).
- **Framework**: React 18, Vite, Tailwind CSS 4, Motion/React.
- **Assets**: Phải import từ `src/assets`.
- **Testing**: Phải pass 39 test cases trong `frontend/src/__tests__`.
