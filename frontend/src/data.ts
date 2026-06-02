export interface AIService {
  id: string;
  title: string;
  description: string;
}

export interface FeaturedProduct {
  id: string;
  name: string;
  tagline: string;
  price: string;
  features: string[];
  metrics: string;
  badge: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
  icon?: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonLink: string;
}

export interface Testimonial {
  author: string;
  role: string;
  company: string;
  rating: number;
  content: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  link: string;
}

export const COMPANY_NAME = "NeuroShin AI";
export const SLOGAN = "“より深く考え、より賢く成長する”";
export const CORE_DOMAIN = "NeuroShin AIは、企業や個人が業務を自動化し、生産性を向上させ、かつてないほど正確な意思決定を行えるよう支援する画期的なAI製品を開発しています。";

export const AI_SERVICES: AIService[] = [
  {
    id: "svc-1",
    title: "AIチャットボット＆バーチャルアシスタント",
    description: "文脈を理解し、ネイティブのような自然な応答で24時間365日のカスタマーケアを自動化します。"
  },
  {
    id: "svc-2",
    title: "AIデータ分析",
    description: "企業の生のデータ資産を画期的なビジネスの意思決定に変え、市場トレンドを正確に予測します。"
  },
  {
    id: "svc-3",
    title: "AIコンテンツ生成",
    description: "SEOに強い記事の執筆、クリエイティブな画像デザイン、プロフェッショナルな動画制作を数秒で、ワンクリックで実現します。"
  },
  {
    id: "svc-4",
    title: "AI画像認識",
    description: "画像や動画を高速で処理・分析するコンピュータビジョンシステムで、検査やセキュリティ監視に応用可能です。"
  },
  {
    id: "svc-5",
    title: "AI予測＆最適化",
    description: "リソースを最適化し、サプライチェーンを管理し、企業の運営効率を飛躍的に向上させる最適化アルゴリズムです。"
  },
  {
    id: "svc-6",
    title: "AIセキュリティ",
    description: "自己学習型の機械学習モデルに基づき、インテリジェントな脅威をリアルタイムで検出し、データ漏洩を防止します。"
  }
];

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: "prod-1",
    name: "ShinChat Pro",
    tagline: "多言語に最適化された次世代AI対話アシスタント",
    price: "月額 ¥19,800",
    badge: "ベストセラー",
    metrics: "最大10,000件の同時対話を処理",
    features: [
      "ネイティブレベルの日本語と英語をサポート",
      "内部資料（PDF、Web、Docs）からの自動学習",
      "API/ウィジェット経由でWebサイトやアプリに直接統合",
      "感情分析を行い、必要に応じてコンサルタントへ転送"
    ]
  },
  {
    id: "prod-2",
    name: "DataShin Analytics",
    tagline: "オールインワンのAIデータ分析プラットフォーム",
    price: "月額 ¥29,800",
    badge: "企業向け",
    metrics: "直感的なレポートを即座に自動生成",
    features: [
      "20種類以上のインテリジェントなチャートを自動描画",
      "SQL不要、自然言語によるデータ分析",
      "過去のデータに基づいたビジネス戦略の推奨",
      "収益変動リスクの予測"
    ]
  },
  {
    id: "prod-3",
    name: "ShinVision",
    tagline: "リアルタイム分析AIコンピュータビジョン",
    price: "月額 ¥39,800",
    badge: "先駆的技術",
    metrics: "認識精度99.8%を達成",
    features: [
      "自動ラインでの製品品質管理",
      "不審な侵入を検知するAI防犯カメラシステム",
      "小売店舗での行動・客密度分析",
      "ほとんどの一般的なIPカメラと互換性あり"
    ]
  },
  {
    id: "prod-4",
    name: "ContentShin Studio",
    tagline: "AIマルチメディアコンテンツ制作スタジオ",
    price: "月額 ¥9,800",
    badge: "卓越した創造性",
    metrics: "わずか数秒で製品を完成",
    features: [
      "記事、脚本、クリエイティブなマーケティングメールの自動作成",
      "リクエストに応じた高品質なイラストの生成",
      "自動字幕付きの短尺動画の生成",
      "表情豊かなテキスト読み上げ（TTS）"
    ]
  }
];

export const IMPRESSIVE_STATS: StatItem[] = [
  {
    value: "50,000+",
    label: "導入企業数",
    description: "世界中の大小さまざまなパートナー企業",
    icon: "Building"
  },
  {
    value: "99.9%",
    label: "稼働率コミットメント",
    description: "強力なクラウド基盤による最大限の安定性",
    icon: "Cpu"
  },
  {
    value: "3秒",
    label: "平均応答時間",
    description: "迅速、スムーズ、そして即座に",
    icon: "Clock"
  },
  {
    value: "120+",
    label: "展開国数",
    description: "グローバル規模のソリューション",
    icon: "Globe"
  },
  {
    value: "アジア太平洋",
    label: "AI Innovation Award 2024",
    description: "最優秀AIイノベーション賞受賞",
    icon: "Award"
  }
];

export const ADVANTAGES: AdvantageItem[] = [
  {
    title: "独自開発의 AIモデル",
    description: "独自の独立したAIアーキテクチャを所有し、全体的なパフォーマンスを最適化。ChatGPTやサードパーティのサービスに依存しません。"
  },
  {
    title: "日本語への深い最適化",
    description: "複雑な文脈、敬語、文化的なニュアンス、日本企業のコミュニケーションにおける厳しい要件を深く理解しています。"
  },
  {
    title: "絶対的なデータセキュリティ",
    description: "国際標準のISO 27001および日本の個人情報保護法（APPI）を厳格に遵守しています。"
  },
  {
    title: "容易かつ柔軟な統合",
    description: "RESTful設計のAPIと豊富なSDKにより、CRM、ERP、または既存のあらゆるシステムと簡単に接続可能です。"
  },
  {
    title: "継続的な自己学習とアップグレード",
    description: "高度な機械学習モデルが実際のフィードバックから自動的にインテリジェントに学習し、日々精度を向上させます。"
  },
  {
    title: "マンツーマンの導入支援",
    description: "テクニカルエキスパートチームが密接に寄り添い、各企業に合わせたソリューションのインストールと最適化を指導します。"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "スタータープラン",
    price: "¥6,600",
    period: "月",
    description: "個人、コンテンツクリエイター、小規模なスタートアップチームに最適なソリューションです。",
    features: [
      "任意のAI製品を1つ使用可能",
      "月間5,000リクエスト制限",
      "標準メールサポート",
      "APIドキュメントへのアクセス",
      "基本機能の自動アップデート"
    ],
    isPopular: false,
    buttonText: "無料で始める",
    buttonLink: "#contact"
  },
  {
    name: "ビジネスプラン",
    price: "¥26,400",
    period: "月",
    description: "高度なプロセスの自動化を必要とする、急成長中の企業に最適です。",
    features: [
      "3つの統合AI製品を使用可能",
      "月間50,000リクエスト制限",
      "24時間365日のオンラインサポート",
      "リアルタイムのパフォーマンス分析ダッシュボード",
      "ブランドに合わせたチャットボットウィジェットのカスタマイズ",
      "Webサイト数無制限のAPI統合"
    ],
    isPopular: true,
    buttonText: "無料トライアルを開始",
    buttonLink: "#contact"
  },
  {
    name: "エンタープライズプラン",
    price: "お問い合わせ",
    period: "見積もり",
    description: "最高レベルのセキュリティインフラと独自のモデルカスタマイズを必要とする大企業向けです。",
    features: [
      "使用回数無制限",
      "オンプレミス / プライベートクラウド展開のサポート",
      "独自AIモデルのカスタマイズトレーニング",
      "最高優先度のSLA品質保証",
      "専用のアカウントマネージャー（Dedicated AM）",
      "現場での深い技術トレーニング"
    ],
    isPopular: false,
    buttonText: "相談・お問い合わせ",
    buttonLink: "#contact"
  }
];

export const CLIENT_LOGOS = [
  { 
    name: "Rakuten", 
    industry: "E-Commerce", 
    logoUrl: "/rakuten.png",
    domain: "rakuten.co.jp"
  },
  { 
    name: "NTT DATA", 
    industry: "Systems Integration", 
    logoUrl: "/nttdata.png",
    domain: "nttdata.com"
  },
  { 
    name: "mercari", 
    industry: "Marketplace", 
    logoUrl: "/mercari.png",
    domain: "mercari.com"
  },
  { 
    name: "SUNTORY", 
    industry: "Beverages", 
    logoUrl: "/suntory.png",
    domain: "suntory.co.jp"
  },
  { 
    name: "LINE", 
    industry: "Messaging", 
    logoUrl: "/line.png",
    domain: "line.me"
  },
  { 
    name: "docomo", 
    industry: "Telecommunications", 
    logoUrl: "/docomo.png",
    domain: "nttdocomo.co.jp"
  },
  { 
    name: "Money Forward", 
    industry: "Fintech", 
    logoUrl: "/money_forrward.png",
    domain: "moneyforward.com"
  },
  { 
    name: "YAHOO! JAPAN", 
    industry: "Internet Services", 
    logoUrl: "/yahoo.png",
    domain: "yahoo.co.jp"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Yamamoto Kenji",
    role: "CTO",
    company: "Rakuten",
    rating: 5,
    content: "ShinChat Proのおかげで、カスタマーサポート部門の業務量を70%削減できました。応答が非常に自然で、お客様はAIとチャットしていることに気づかないほどです。"
  },
  {
    author: "Tanaka Yuki",
    role: "COO",
    company: "SoftBank",
    rating: 5,
    content: "DataShin Analyticsにより、レポート作成時間が3日間から20分に短縮されました。これは今年行った投資の中で最高のものでした。"
  },
  {
    author: "Nakamura Hiroshi",
    role: "CEO",
    company: "FinLink Japan",
    rating: 5,
    content: "私たちは小さなスタートアップですが、NeuroShin AIのおかげで200人規模の企業のように運営できています。価格も手頃で、機能も卓越しています。"
  }
];

export const NEWS_RESEARCH: NewsItem[] = [
  {
    id: "news-1",
    category: "製品",
    title: "NeuroShin AI、日本語に最適化された大規模言語モデル「JaLLM 2.0」を正式リリース。圧倒的なパフォーマンスを実現。",
    date: "2026/05/28",
    link: "#"
  },
  {
    id: "news-2",
    category: "研究",
    title: "最新の市場調査：アジア企業の78%が、AIインテリジェントソリューション導入後に大幅な収益増を記録。",
    date: "2026/05/15",
    link: "#"
  },
  {
    id: "news-3",
    category: "ニュース",
    title: "東京テクノロジーカンファレンス：NeuroShin AI、2025年日本で最も注目すべきAI企業トップ10に選出。",
    date: "2026/04/05",
    link: "#"
  },
  {
    id: "news-4",
    category: "ハンドブック",
    title: "実践ガイド：日本の中小企業（SME）にとって最も効果的なAIによるデジタルトランスフォーメーションソリューションの選び方。",
    date: "2026/03/20",
    link: "#"
  }
];
