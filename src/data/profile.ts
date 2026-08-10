import type { L } from '~/i18n/config';

export const profile = {
  tagline: {
    ja: '半分がテニス、もう半分が音楽、あとの半分がお酒で、残りの半分が物理の、ゆるふわアナログ系エンジニア。',
    en: 'Half tennis, half music, another half booze, and the remaining half physics — an easygoing, analog-leaning engineer.',
  } satisfies L,
  role: {
    ja: 'Software Engineer / Product Owner',
    en: 'Software Engineer / Product Owner',
  } satisfies L,
  avatar: '/img/avatar-icon.png',
  socials: [
    { label: 'GitHub', url: 'https://github.com/akagenorobin', handle: '@akagenorobin' },
    { label: 'X', url: 'https://twitter.com/akagenorobin', handle: '@akagenorobin' },
    { label: 'Instagram', url: 'https://www.instagram.com/akagenorobin', handle: '@akagenorobin' },
    { label: 'GitLab', url: 'https://gitlab.com/akagenorobin', handle: '@akagenorobin' },
    { label: 'AtCoder', url: 'https://atcoder.jp/users/akagenorobin', handle: '@akagenorobin' },
    { label: 'YOUTRUST', url: 'https://youtrust.jp/users/akagenorobin', handle: '@akagenorobin' },
  ],
};

export type WorkEntry = {
  name: L;
  url: string;
  org: L;
  /** 現在関わっているものは強調して先に出す */
  current: boolean;
  status: L;
  note: L;
  icon?: string;
  iconAlt?: L;
};

export const works: WorkEntry[] = [
  {
    name: { ja: 'Qast', en: 'Qast' },
    url: 'https://qast.jp/',
    org: { ja: 'any株式会社', en: 'any, inc.' },
    current: true,
    status: { ja: '開発中', en: 'In development' },
    note: {
      ja: '社内に埋もれる個人の知識や経験を引き出し、業務の効率化と企業価値の向上を実現する AI ナレッジプラットフォーム。',
      en: 'An AI knowledge platform that draws out the knowledge and experience buried in individuals, improving day-to-day efficiency and the value of the company.',
    },
    icon: '/img/qast.png',
    iconAlt: { ja: 'Qast のロゴ', en: 'The Qast logo' },
  },
  {
    name: { ja: 'あかげの人狼', en: 'あかげの人狼 (Akage no Jinro)' },
    url: 'https://akagenojinro.com',
    org: { ja: '個人開発', en: 'Personal project' },
    current: true,
    status: { ja: '開発中', en: 'In development' },
    note: {
      ja: '本格オンラインクロストーク人狼プラットフォームの開発を行っています。',
      en: 'Building a full-fledged online cross-talk werewolf platform.',
    },
    icon: '/img/akagenojinro.png',
    iconAlt: {
      ja: 'あかげの人狼のアイコン',
      en: 'The あかげの人狼 icon',
    },
  },
  {
    name: { ja: 'いい生活Square', en: 'e-Seikatsu Square' },
    url: 'https://www.es-service.net/service/square/',
    org: { ja: '株式会社いい生活', en: 'e-Seikatsu Co., Ltd.' },
    current: false,
    status: { ja: '過去に開発', en: 'Past work' },
    note: {
      ja: '全国の不動産管理会社と賃貸仲介会社をつなぐ賃貸業者間流通サイト。空室募集から内見予約・入居申込・賃貸管理までを一元化する。',
      en: 'A B2B property distribution site connecting management and brokerage companies nationwide, unifying vacancy listings, viewing reservations, applications, and rental management.',
    },
    icon: '/img/e-seikatsu-square.svg',
    iconAlt: { ja: 'いい生活Square のロゴ', en: 'The e-Seikatsu Square logo' },
  },
  {
    name: {
      ja: 'いい生活賃貸クラウド 営業支援',
      en: 'e-Seikatsu Rental Cloud — Sales Support',
    },
    url: 'https://www.es-service.net/service/sales-support/',
    org: { ja: '株式会社いい生活', en: 'e-Seikatsu Co., Ltd.' },
    current: false,
    status: { ja: '過去に開発', en: 'Past work' },
    note: {
      ja: 'ポータルサイトからの反響を自動で取り込み、メール・LINE・SMS などのチャネルを1画面で扱う、不動産会社向けの顧客管理・営業支援システム (CRM)。',
      en: 'A CRM for real-estate companies: it imports leads from portal sites automatically and handles email, LINE, and SMS in a single view.',
    },
    icon: '/img/e-seikatsu-sales-support.svg',
    iconAlt: {
      ja: 'いい生活賃貸クラウド 営業支援のロゴ',
      en: 'The e-Seikatsu Rental Cloud Sales Support logo',
    },
  },
];

export type EducationEntry = {
  period: L;
  title: L;
  notes: L[];
};

/** 職歴と同じく新しい順に並べる */
export const education: EducationEntry[] = [
  {
    period: { ja: '2012年4月 〜 2015年3月', en: 'Apr 2012 – Mar 2015' },
    title: {
      ja: '大阪大学大学院 理学研究科 物理学専攻',
      en: 'Osaka University, Graduate School of Science — Physics',
    },
    notes: [
      {
        ja: '[菊池研究室](https://sites.google.com/view/cp-cmc/top)所属',
        en: 'Member of the [Kikuchi Laboratory](https://sites.google.com/view/cp-cmc/top)',
      },
      {
        ja: 'だらだら研究していたので修士は3年かかりました',
        en: 'I took my time, so the master’s degree ended up taking three years',
      },
      {
        ja: 'ざっくり言うと統計物理の数理モデルに関する研究をしていました',
        en: 'Broadly speaking, I researched mathematical models in statistical physics',
      },
    ],
  },
  {
    period: { ja: '2008年4月 〜 2012年3月', en: 'Apr 2008 – Mar 2012' },
    title: {
      ja: '大阪大学 理学部 物理学科',
      en: 'Osaka University, School of Science — Department of Physics',
    },
    notes: [],
  },
];

export type CareerRole = {
  period: L;
  title: L;
  note: L;
};

export type CareerEntry = {
  period: L;
  org: L;
  url?: string;
  current?: boolean;
  roles: CareerRole[];
};

export const career: CareerEntry[] = [
  {
    period: { ja: '2026年1月 〜 現在', en: 'Jan 2026 – Present' },
    org: { ja: 'any株式会社', en: 'any, inc.' },
    url: 'https://anyinc.jp/',
    current: true,
    roles: [
      {
        period: { ja: '2026年1月 〜 現在', en: 'Jan 2026 – Present' },
        title: { ja: 'プロダクトチーム', en: 'Product Team' },
        note: {
          ja: 'AI ナレッジプラットフォーム Qast の開発に関わっています',
          en: 'Working on Qast, an AI knowledge platform',
        },
      },
    ],
  },
  {
    period: { ja: '2015年4月 〜 2025年11月', en: 'Apr 2015 – Nov 2025' },
    org: { ja: '株式会社いい生活', en: 'e-Seikatsu Co., Ltd.' },
    url: 'https://www.e-seikatsu.info/',
    roles: [
      {
        period: { ja: '2022年4月 〜 2025年11月', en: 'Apr 2022 – Nov 2025' },
        title: {
          ja: '仲介ソリューション本部 副本部長',
          en: 'Deputy Head, Brokerage Solutions Division',
        },
        note: {
          ja: 'プロダクトオーナーをやりつつ、採用・教育まで幅広く活躍',
          en: 'Served as product owner while also covering hiring and engineer education',
        },
      },
      {
        period: { ja: '2021年4月 〜 2022年3月', en: 'Apr 2021 – Mar 2022' },
        title: {
          ja: 'コミュニケーションプラットフォーム本部 副本部長',
          en: 'Deputy Head, Communication Platform Division',
        },
        note: {
          ja: 'バックエンドの運用経験を活かしてプロダクトオーナーとして新規サービスの立ち上げを主導',
          en: 'Drew on backend operations experience to lead a new service launch as product owner',
        },
      },
      {
        period: { ja: '2019年11月 〜 2021年3月', en: 'Nov 2019 – Mar 2021' },
        title: {
          ja: 'サービスプラットフォーム開発部 副部長',
          en: 'Deputy Manager, Service Platform Development',
        },
        note: {
          ja: 'エンジニアリングマネージャーとしてチームビルディングに従事',
          en: 'Worked on team building as an engineering manager',
        },
      },
      {
        period: { ja: '2015年4月 〜 2019年10月', en: 'Apr 2015 – Oct 2019' },
        title: {
          ja: 'サービスプラットフォーム開発部',
          en: 'Service Platform Development',
        },
        note: {
          ja: '新卒で入社して不動産会社向けサービスのバックエンドの実装・設計・運用を担当',
          en: 'Joined as a new graduate; implemented, designed, and operated backends for real-estate services',
        },
      },
    ],
  },
];

export type SkillLanguage = {
  name: L;
  note: L;
};

export const spokenLanguages: SkillLanguage[] = [
  {
    name: { ja: '日本語', en: 'Japanese' },
    note: { ja: '母語話者です', en: 'Native speaker' },
  },
  {
    name: { ja: '英語', en: 'English' },
    note: { ja: '日常会話レベルです', en: 'Conversational' },
  },
];

export const programmingLanguages: SkillLanguage[] = [
  {
    name: { ja: 'Python', en: 'Python' },
    note: {
      ja: 'プログラミング言語としては最も触った時間が長く、一番流暢に書ける言語です',
      en: 'The language I have spent the most time with, and the one I write most fluently',
    },
  },
  {
    name: { ja: 'TypeScript', en: 'TypeScript' },
    note: {
      ja: '最近比較的よく触っている言語で、Lambda・Firebase Functions・React などを書きます',
      en: 'My most-used language lately — Lambda, Firebase Functions, and React',
    },
  },
  {
    name: { ja: 'Ruby', en: 'Ruby' },
    note: {
      ja: '昔好きだった言語。Rails アプリを趣味で運用していたこともあります',
      en: 'An old favorite. I used to run a Rails app as a hobby project',
    },
  },
  {
    name: { ja: 'Rust', en: 'Rust' },
    note: {
      ja: 'ちゃんと書けるとは言い難いですが、書いてて楽しいなと思う言語です。競技プログラミングなどで用いています',
      en: 'I would not claim proficiency, but it is a joy to write. I use it for competitive programming',
    },
  },
];

export type SkillGroup = {
  category: L;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: { ja: 'Python', en: 'Python' },
    items: ['Flask', 'Celery', 'SQLAlchemy'],
  },
  {
    category: { ja: 'TypeScript', en: 'TypeScript' },
    items: ['React', 'Next.js', 'NestJS'],
  },
  {
    category: { ja: 'AWS', en: 'AWS' },
    items: [
      'Lambda',
      'AppSync',
      'Amplify',
      'DynamoDB',
      'CDK',
      'API Gateway',
      'CloudFront',
      'S3',
      'ECS',
      'EKS',
      'Aurora',
    ],
  },
  {
    category: { ja: 'GCP', en: 'GCP' },
    items: ['Firebase', 'Cloud Functions'],
  },
  {
    category: { ja: 'ミドルウェア', en: 'Middleware' },
    items: ['MySQL', 'Docker', 'Apache', 'RabbitMQ', 'Kubernetes'],
  },
];

export type ValueEntry = {
  title: L;
  notes: L[];
};

export const likes: ValueEntry[] = [
  {
    title: {
      ja: 'チームで1つの目的に向かって行動すること',
      en: 'A team moving toward a single shared goal',
    },
    notes: [
      {
        ja: '特にメンバーが個々の個性を活かし、それぞれの役割を全うしているようなチームを好みます',
        en: 'Especially teams where each member plays to their own character and fully owns their role',
      },
      {
        ja: 'いわゆる馴れ合い・惰性・上辺の関係と言ったもので成り立っているチームは好みません',
        en: 'I dislike teams held together by cliquishness, inertia, or surface-level politeness',
      },
    ],
  },
  {
    title: { ja: 'サービス開発', en: 'Building products' },
    notes: [
      {
        ja: '特に「良いサービスとは」を考えること、自分が関わったサービスをユーザが使ってくれている様子を眺めること',
        en: 'Above all, asking what makes a product good — and watching real users use something I helped build',
      },
    ],
  },
  {
    title: { ja: '一貫性があること', en: 'Consistency' },
    notes: [
      {
        ja: 'どちらかと言うと一貫性がないことが嫌いかも',
        en: 'Or rather, maybe it is inconsistency that I dislike',
      },
    ],
  },
  {
    title: { ja: '遊び心', en: 'Playfulness' },
    notes: [
      {
        ja: '「仕事は楽しく遊びは真剣に」をモットーにしています',
        en: 'My motto: have fun at work, and be serious about play',
      },
    ],
  },
  {
    title: {
      ja: '戦うこと・勝ちにこだわること',
      en: 'Competing, and caring about winning',
    },
    notes: [
      {
        ja: '勝敗そのものというよりは、勝つために全力を尽くすこと、また、そうしている人間同士がぶつかり合うこと、は美しいという価値観を持っています',
        en: 'Less about the result than the beauty of giving everything to win — and of people who do that colliding with each other',
      },
    ],
  },
  {
    title: {
      ja: '異質な個性が化学反応して良いものが生まれること',
      en: 'Unlike personalities reacting into something good',
    },
    notes: [
      {
        ja: 'チームプレーの魅力はここにあると思っています',
        en: 'This, to me, is where the appeal of teamwork lives',
      },
    ],
  },
  {
    title: {
      ja: '一見関係ないと思われる物事を関連付けること',
      en: 'Connecting things that look unrelated',
    },
    notes: [
      {
        ja: '統計物理の本質的な面白さはそういう部分にあると思っています',
        en: 'I believe the essential fun of statistical physics lies exactly there',
      },
    ],
  },
  {
    title: {
      ja: 'いわゆる人間らしい有機的な物事',
      en: 'Things that are human and organic',
    },
    notes: [
      {
        ja: '作品そのものよりもその作者の方を好きになりがち',
        en: 'I tend to fall for the creator more than the work itself',
      },
    ],
  },
];

export const strengths: ValueEntry[] = [
  {
    title: {
      ja: '考えること・多面的なものの見方ができること',
      en: 'Thinking, and seeing things from many angles',
    },
    notes: [
      {
        ja: '特に事象を抽象化して汎化すること、データから推論すること、何かを判断するためのもっともらしいロジックを組み立てること',
        en: 'Particularly abstracting and generalizing phenomena, reasoning from data, and constructing plausible logic for decisions',
      },
    ],
  },
  {
    title: { ja: '人間観察', en: 'Reading people' },
    notes: [
      {
        ja: '人の言動から思考や特徴をある程度トレースして、どういう立ち位置が向いているかを考えるのは得意だと思います',
        en: 'I can trace someone’s thinking and traits from how they speak and act, and work out what position suits them',
      },
    ],
  },
  {
    title: { ja: '信頼を得ること', en: 'Earning trust' },
    notes: [
      {
        ja: '価値観に優劣を付けないことを基本思想としているのと、フラットに接するので、ある程度人の信頼を得やすいです',
        en: 'I never rank one set of values above another and I treat everyone flatly, which tends to earn trust',
      },
    ],
  },
  {
    title: { ja: 'チームビルディング', en: 'Team building' },
    notes: [
      {
        ja: '自分がリーダーをやる際は各メンバーが能動的にやりたいことができるような環境を目指します',
        en: 'When I lead, I aim for an environment where each member can proactively do what they want to do',
      },
      {
        ja: '受動的な人を積極的に指導したりはせず、見捨てがちです',
        en: 'I do not push guidance onto passive people — I tend to let them be',
      },
      {
        ja: 'マネージャーというよりはどちらかと言うとプロデューサーという表現の方がしっくり来ています',
        en: 'Less a manager than a producer, if I had to pick a word',
      },
    ],
  },
];

export type ArticleEntry = {
  title: L;
  url: string;
  note: L;
  year: number;
  /** 掲載元で非公開になったものはリンクせず、その旨を出す */
  unavailable?: boolean;
};

export const articles: ArticleEntry[] = [
  {
    title: {
      ja: '「技術交流会」で広がる、エンジニアの学びとつながり',
      en: 'How our “tech meetup” widened engineers’ learning and connections',
    },
    url: 'https://note.e-seikatsu.info/n/ndb4102b6b885',
    note: { ja: '2025年に受けたインタビューの記事です', en: 'An interview from 2025' },
    year: 2025,
    unavailable: true,
  },
  {
    title: {
      ja: '【PO/PdMインタビュー】あらゆる不動産の取引がはじまる場を創る「いい生活Square」',
      en: '[PO/PdM interview] Building “e-Seikatsu Square”, where every real-estate deal begins',
    },
    url: 'https://note.e-seikatsu.info/n/n6c406862218a',
    note: { ja: '2024年に受けたインタビューの記事です', en: 'An interview from 2024' },
    year: 2024,
    unavailable: true,
  },
  {
    title: {
      ja: '仲介ソリューション本部インタビュー【いい生活 本部インタビュー第3回】',
      en: 'Brokerage Solutions Division interview (e-Seikatsu division interviews #3)',
    },
    url: 'https://note.e-seikatsu.info/n/n3a8a9b6483dd',
    note: { ja: '2023年に受けたインタビューの記事です', en: 'An interview from 2023' },
    year: 2023,
  },
  {
    title: {
      ja: '物理学専攻出身のITエンジニアが、チーム開発にもたらす価値とは？',
      en: 'What value does a physics graduate bring to team software development?',
    },
    url: 'https://www.wantedly.com/companies/e-seikatsu/post_articles/232935',
    note: { ja: '2017年に受けたインタビューの記事です', en: 'An interview from 2017' },
    year: 2017,
    unavailable: true,
  },
];

export type ContestProfile = {
  site: string;
  url: string;
  handle: string;
};

export const contestProfiles: ContestProfile[] = [
  { site: 'AtCoder', url: 'https://atcoder.jp/users/akagenorobin', handle: 'akagenorobin' },
  { site: 'TopCoder', url: 'https://profiles.topcoder.com/akagenorobin', handle: 'akagenorobin' },
];

export type ContestResult = {
  year: number;
  team: string;
  /** 順位。失格の場合は null */
  rank: number | null;
  score?: string;
  label?: L;
  standings?: string;
  /** 外部記事の URL */
  report?: string;
  /** サイト内の参加記のパス。ロケールは描画時に付ける */
  reportPath?: string;
};

export type ContestSeries = {
  name: string;
  description: L;
  results: ContestResult[];
};

export const contestSeries: ContestSeries[] = [
  {
    name: 'ICFP-PC',
    description: {
      ja: '関数型プログラミングの国際学会 ICFP が主催する、チーム人数・言語自由の72時間耐久プログラミングコンテスト。',
      en: 'A 72-hour programming contest hosted by ICFP, with free choice of team size and language.',
    },
    results: [
      {
        year: 2025,
        team: 'chirijako',
        rank: 27,
        standings: 'https://icfpcontest2025.github.io/aedificium.html',
      },
      {
        year: 2024,
        team: 'chirijako',
        rank: 21,
        standings: 'https://icfpcontest2024.github.io/scoreboard.html',
        report: 'https://note.e-seikatsu.info/n/n141f15f1010c',
      },
      { year: 2023, team: 'chirijako', rank: 15, standings: 'https://icfpcontest2023.github.io/' },
      {
        year: 2022,
        team: 'chirijako',
        rank: 17,
        standings: 'https://icfpcontest2022.github.io/scoreboard/',
        reportPath: '/post/2022-09-20',
      },
      {
        year: 2021,
        team: 'chirijako',
        rank: 6,
        standings: 'https://icfpcontest2021.github.io/scoreboard.html',
      },
      {
        year: 2020,
        team: 'cirijako',
        rank: 35,
        standings: 'https://icfpcontest2020.github.io/#/scoreboard#final',
      },
      {
        year: 2019,
        team: 'cirimenjao',
        rank: 35,
        standings: 'https://icfpcontest2019.github.io/rankings/',
        reportPath: '/post/2019-07-12',
      },
      {
        year: 2018,
        team: 'chirimenjako',
        rank: 15,
        standings: 'https://icfpcontest2018.github.io/full/final-standings.html',
      },
      {
        year: 2017,
        team: 'chirimenjako',
        rank: null,
        standings: 'https://icfpcontest2017.github.io/post/full-one/',
      },
    ],
  },
  {
    name: 'ISUCON',
    description: {
      ja: 'お題となる Web サービスを限界まで高速化する、いわゆるチューニングバトル。',
      en: 'A tuning battle: squeeze as much speed as possible out of a given web service.',
    },
    results: [
      {
        year: 2023,
        team: '忖度',
        rank: 361,
        score: '6,667',
        label: { ja: 'ISUCON 13 本選', en: 'ISUCON 13 Finals' },
        standings: 'https://isucon.net/archives/57993937.html',
      },
      {
        year: 2021,
        team: 'newton-kun',
        rank: 272,
        score: '13,616',
        label: { ja: 'ISUCON 11 予選', en: 'ISUCON 11 Qualifiers' },
        standings: 'https://isucon.net/archives/56021246.html',
      },
      {
        year: 2020,
        team: 'aimai-chan',
        rank: 355,
        score: '478',
        label: { ja: 'ISUCON 10 予選', en: 'ISUCON 10 Qualifiers' },
        standings: 'https://isucon.net/archives/55008744.html',
      },
      {
        year: 2019,
        team: 'avogad-chan',
        rank: 222,
        score: '3,710',
        label: { ja: 'ISUCON 9 予選', en: 'ISUCON 9 Qualifiers' },
        standings: 'https://isucon.net/archives/53789925.html',
      },
      {
        year: 2018,
        team: 'chirimenjako--',
        rank: 99,
        score: '10,129',
        label: { ja: 'ISUCON 8 予選', en: 'ISUCON 8 Qualifiers' },
        standings: 'https://isucon.net/archives/52467371.html',
      },
    ],
  },
  {
    name: 'AtCoder Masters',
    description: {
      ja: 'AtCoder が主催する社会人チーム戦のヒューリスティックコンテスト。',
      en: 'A team-based heuristic contest for working professionals, hosted by AtCoder.',
    },
    results: [
      {
        year: 2025,
        team: 'いっちぃ勉強会--',
        rank: 87,
        score: '2,034,377,576',
        label: { ja: '第二回マスターズ選手権 予選', en: '2nd Masters Championship, Qualifiers' },
        standings: 'https://atcoder.jp/contests/masters2025-qual/standings/team',
      },
      {
        year: 2024,
        team: 'いっちぃ勉強会--',
        rank: 84,
        score: '487,331,447',
        label: { ja: '第一回マスターズ選手権 予選', en: '1st Masters Championship, Qualifiers' },
        standings: 'https://atcoder.jp/contests/masters-qual/standings/team',
      },
    ],
  },
];

export type OtherEntry = {
  title: L;
  url: string;
  note: L;
};

export const others: OtherEntry[] = [
  {
    title: { ja: 'Sing Band', en: 'Sing Band' },
    url: 'https://www.youtube.com/@singband5121',
    note: {
      ja: '趣味でやっているアコースティックバンドで鍵盤を弾いています。最近は活動してないです',
      en: 'I play keys in this hobby acoustic band. Not very active these days',
    },
  },
  {
    title: { ja: 'AWS as a complex system', en: 'AWS as a complex system' },
    url: 'https://interaxion-podcast.github.io/12',
    note: {
      ja: '[@nowohyeah](https://twitter.com/nowohyeah) くんがやっているポッドキャスト [interaxion](https://interaxion-podcast.github.io/) に呼ばれて出演しました',
      en: 'I was invited onto [interaxion](https://interaxion-podcast.github.io/), a podcast run by [@nowohyeah](https://twitter.com/nowohyeah)',
    },
  },
  {
    title: { ja: '特定非営利活動法人レイパス', en: 'Raypass (NPO)' },
    url: 'https://raypass.jp/',
    note: {
      ja: '不登校の子どもとその保護者を支えるNPOをサポートしています。大阪・奈良でフリースクール・通信高校のサポート校・訪問支援・ホームスクーリング支援・親の会を運営している団体です',
      en: 'I support this nonprofit for children who are out of school and their families. In Osaka and Nara they run a free school, a support school for correspondence high schools, outreach visits, homeschooling support, and a parents’ circle',
    },
  },
];
