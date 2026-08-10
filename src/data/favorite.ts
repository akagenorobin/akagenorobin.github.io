import type { L } from '~/i18n/config';

export const tennis = {
  body: [
    { ja: '中学からやっています。', en: 'I have played since junior high.' },
    { ja: 'ネットプレーが大好きです。', en: 'I love net play.' },
    {
      ja: 'ストロークは天才的に才能がないです。',
      en: 'My groundstrokes are a work of genuine, prodigious talentlessness.',
    },
  ] satisfies L[],
};

export type TennisResult = {
  year: number;
  edition: L;
  /** 出場したチーム名 */
  team: string;
  result: L;
  /** 大会公式の結果表 (PDF) */
  standings?: string;
  report?: string;
};

export const tennisTournament = {
  name: 'ITS硬式テニス大会',
  description: {
    ja: '関東ITソフトウェア健康保険組合が主催する硬式テニスの大会。',
    en: 'A tennis tournament hosted by the Kanto IT Software Health Insurance Society.',
  } satisfies L,
  results: [
    {
      year: 2025,
      edition: { ja: '第14回', en: '14th' },
      team: '有栖川公園',
      result: { ja: 'ベスト4', en: 'Semifinals' },
      standings: 'https://www.its-kenpo.or.jp/documents/NEWS/event/kekka/tennis/14fin.pdf',
    },
    {
      year: 2024,
      edition: { ja: '第13回', en: '13th' },
      team: '有栖川公園',
      result: { ja: '決勝リーグ', en: 'Final league' },
      standings: 'https://www.its-kenpo.or.jp/documents/NEWS/event/kekka/tennis/13fin.pdf',
      report: 'https://note.e-seikatsu.info/n/nd6a9c5090b5b',
    },
    {
      year: 2023,
      edition: { ja: '第12回', en: '12th' },
      team: '有栖川公園',
      result: { ja: '予選リーグ', en: 'Group stage' },
      standings: 'https://www.its-kenpo.or.jp/documents/NEWS/event/kekka/tennis/12a.pdf',
    },
    {
      year: 2020,
      edition: { ja: '第10回', en: '10th' },
      team: '有栖川公園',
      result: { ja: '予選リーグ', en: 'Group stage' },
    },
  ] satisfies TennisResult[],
};

export const music = {
  body: [
    {
      ja: '趣味でピアノとギターを弾いています。',
      en: 'I play piano and guitar as a hobby.',
    },
    {
      ja: '基本的に歌が好きですが、楽器も全般的に好きです。',
      en: 'Singing is my first love, but I like instruments across the board.',
    },
    {
      ja: '好きな鍵盤奏者は上原ひろみさんとヒイズミマサユ機さん。',
      en: 'My favorite keyboardists are Hiromi Uehara and Hiizumi Masayuki.',
    },
  ] satisfies L[],
};

export type Live = {
  /** YYYY-MM-DD */
  date: string;
  title: string;
  venue: L;
};

export type Artist = {
  name: L;
  /** ローマ字表記などの副題 */
  subName?: L;
  note: L;
  lives: Live[];
};

export const artists: Artist[] = [
  {
    name: { ja: 'aiko', en: 'aiko' },
    note: {
      ja: '僕の音楽の原点。中2からジャンキーです',
      en: 'The origin of my musical life. I have been an addict since I was 14',
    },
    lives: [
      { date: '2005-05-24', title: 'Love Like Pop vol.9', venue: { ja: '大阪フェスティバルホール', en: 'Osaka Festival Hall' } },
      { date: '2005-08-23', title: 'Love Like Pop vol.9 add', venue: { ja: '大阪城ホール', en: 'Osaka-jo Hall' } },
      { date: '2006-02-09', title: 'Love Like Rock vol.3', venue: { ja: 'Zepp Osaka', en: 'Zepp Osaka' } },
      { date: '2006-11-02', title: 'Love Like Pop vol.10', venue: { ja: '大阪フェスティバルホール', en: 'Osaka Festival Hall' } },
      { date: '2007-01-24', title: 'Love Like Pop vol.10 add', venue: { ja: '大阪城ホール', en: 'Osaka-jo Hall' } },
      { date: '2008-07-13', title: 'Love Like Pop vol.11', venue: { ja: '神戸国際会館こくさいホール', en: 'Kobe International House Kokusai Hall' } },
      { date: '2008-08-30', title: 'Love Like Aloha vol.3', venue: { ja: 'サザンビーチちがさき', en: 'Southern Beach Chigasaki' } },
      { date: '2010-01-27', title: 'Love Like Pop vol.12', venue: { ja: 'グランキューブ大阪', en: 'Grand Cube Osaka' } },
      { date: '2010-07-08', title: 'Love Like Pop vol.13', venue: { ja: '大阪城ホール', en: 'Osaka-jo Hall' } },
      { date: '2011-05-19', title: 'Love Like Pop vol.14', venue: { ja: 'グランキューブ大阪', en: 'Grand Cube Osaka' } },
      { date: '2012-09-26', title: 'Love Like Pop vol.15', venue: { ja: 'アルファあなぶきホール', en: 'Alpha Anabuki Hall' } },
      { date: '2013-01-27', title: 'Love Like Pop vol.15 add', venue: { ja: '大阪城ホール', en: 'Osaka-jo Hall' } },
      { date: '2013-07-17', title: 'Love Like Pop vol.16', venue: { ja: '大阪フェスティバルホール', en: 'Osaka Festival Hall' } },
      { date: '2013-09-07', title: 'Love Like Pop vol.16.5', venue: { ja: '大阪城ホール', en: 'Osaka-jo Hall' } },
      { date: '2013-10-18', title: 'Love Like Rock vol.6', venue: { ja: 'Zepp Namba', en: 'Zepp Namba' } },
      { date: '2014-07-05', title: 'Love Like Pop vol.17', venue: { ja: '大阪フェスティバルホール', en: 'Osaka Festival Hall' } },
      { date: '2014-10-14', title: 'Love Like Pop vol.17', venue: { ja: '大阪フェスティバルホール', en: 'Osaka Festival Hall' } },
      { date: '2014-11-12', title: 'Love Like Pop vol.17.5', venue: { ja: '大阪城ホール', en: 'Osaka-jo Hall' } },
      { date: '2014-11-13', title: 'Love Like Pop vol.17.5', venue: { ja: '大阪城ホール', en: 'Osaka-jo Hall' } },
      { date: '2015-06-20', title: 'Love Like Rock vol.7', venue: { ja: 'Zepp Tokyo', en: 'Zepp Tokyo' } },
      { date: '2015-08-30', title: 'Love Like Aloha vol.5', venue: { ja: 'サザンビーチちがさき', en: 'Southern Beach Chigasaki' } },
      { date: '2015-12-26', title: 'Love Like Pop vol.18', venue: { ja: '横浜アリーナ', en: 'Yokohama Arena' } },
      { date: '2015-12-27', title: 'Love Like Pop vol.18', venue: { ja: '横浜アリーナ', en: 'Yokohama Arena' } },
      { date: '2016-06-04', title: 'Love Like Pop vol.19', venue: { ja: 'NHKホール', en: 'NHK Hall' } },
      { date: '2017-04-27', title: 'Love Like Rock vol.8', venue: { ja: 'Zepp Tokyo', en: 'Zepp Tokyo' } },
      { date: '2017-09-07', title: 'Love Like Rock vol.8', venue: { ja: 'Zepp Tokyo', en: 'Zepp Tokyo' } },
      { date: '2018-08-30', title: 'Love Like Aloha vol.6', venue: { ja: 'サザンビーチちがさき', en: 'Southern Beach Chigasaki' } },
      { date: '2018-09-13', title: 'Love Like Pop vol.20', venue: { ja: 'NHKホール', en: 'NHK Hall' } },
      { date: '2018-11-17', title: 'Love Like Pop vol.20', venue: { ja: 'NHKホール', en: 'NHK Hall' } },
      { date: '2019-02-09', title: 'Love Like Pop vol.21', venue: { ja: 'さいたまスーパーアリーナ', en: 'Saitama Super Arena' } },
      { date: '2019-02-10', title: 'Love Like Pop vol.21', venue: { ja: 'さいたまスーパーアリーナ', en: 'Saitama Super Arena' } },
      { date: '2020-01-23', title: 'Love Like Rock vol.9', venue: { ja: 'Zepp Tokyo', en: 'Zepp Tokyo' } },
      { date: '2021-06-08', title: 'Love Like Pop vol.22', venue: { ja: '東京ガーデンシアター', en: 'Tokyo Garden Theater' } },
      { date: '2021-08-26', title: 'Love Like Pop vol.22', venue: { ja: '大阪フェスティバルホール', en: 'Osaka Festival Hall' } },
      { date: '2022-10-12', title: 'Love Like Rock Limited vol.2', venue: { ja: 'Zepp Haneda', en: 'Zepp Haneda' } },
      { date: '2023-09-10', title: 'Love Like Pop vol.23', venue: { ja: '名古屋国際会議場', en: 'Nagoya Congress Center' } },
      { date: '2024-02-17', title: 'Love Like Pop vol.24', venue: { ja: '横浜アリーナ', en: 'Yokohama Arena' } },
      { date: '2024-08-30', title: 'Love Like Aloha vol.7', venue: { ja: 'サザンビーチちがさき', en: 'Southern Beach Chigasaki' } },
      { date: '2026-02-08', title: 'Love Like Pop vol.25', venue: { ja: '水戸市民会館', en: 'Mito Civic Hall' } },
    ],
  },
  {
    name: { ja: 'ずっと真夜中でいいのに', en: 'ZUTOMAYO' },
    subName: { ja: 'ZUTOMAYO', en: 'ずっと真夜中でいいのに' },
    note: {
      ja: '鮮やかで純粋で美しい世界観の全てが好きです',
      en: 'I love everything about that vivid, pure, beautiful world',
    },
    lives: [
      { date: '2019-04-12', title: '1st LIVE 〜まだまだ偽りでありんす。〜', venue: { ja: 'TSUTAYA O-EAST', en: 'TSUTAYA O-EAST' } },
      { date: '2019-10-23', title: '潜潜ツアー(秋の味覚編)', venue: { ja: 'Zepp Tokyo', en: 'Zepp Tokyo' } },
      { date: '2021-05-15', title: 'CLEANING LABO「温れ落ち度」', venue: { ja: '幕張メッセ', en: 'Makuhari Messe' } },
      { date: '2021-05-16', title: 'CLEANING LABO「温れ落ち度」', venue: { ja: '幕張メッセ', en: 'Makuhari Messe' } },
      { date: '2021-12-05', title: '果羅火羅武〜TOUR', venue: { ja: 'よこすか芸術劇場', en: 'Yokosuka Arts Theatre' } },
      { date: '2022-04-16', title: '鷹は飢えても踊り忘れず', venue: { ja: 'さいたまスーパーアリーナ', en: 'Saitama Super Arena' } },
      { date: '2022-12-22', title: 'テクノプア', venue: { ja: '東京ガーデンシアター', en: 'Tokyo Garden Theater' } },
      { date: '2023-01-14', title: '叢雲のつるぎ', venue: { ja: '国立代々木競技場', en: 'Yoyogi National Gymnasium' } },
      { date: '2023-04-27', title: '元素どろ団子TOUR', venue: { ja: 'Zepp Nagoya', en: 'Zepp Nagoya' } },
      { date: '2023-04-28', title: '元素どろ団子TOUR', venue: { ja: 'Zepp Nagoya', en: 'Zepp Nagoya' } },
      { date: '2023-10-14', title: '喫茶・愛のペガサス', venue: { ja: '水戸市民会館', en: 'Mito Civic Hall' } },
      { date: '2023-12-22', title: '喫茶・愛のペガサス', venue: { ja: '東京ガーデンシアター', en: 'Tokyo Garden Theater' } },
      { date: '2024-12-11', title: 'スナネコ建設の磨き仕上げ', venue: { ja: '神奈川県民ホール', en: 'Kanagawa Kenmin Hall' } },
      { date: '2025-12-22', title: 'コズミックどろ団子TOUR', venue: { ja: '東京ガーデンシアター', en: 'Tokyo Garden Theater' } },
    ],
  },
  {
    name: { ja: '藤原さくら', en: 'Sakura Fujiwara' },
    subName: { ja: 'Sakura Fujiwara', en: '藤原さくら' },
    note: {
      ja: 'きっかけはドラマ『ラブソング』からで、その後『「かわいい」』を聴いてハマりました',
      en: 'I found her through the TV drama “Love Song”, then fell for her after hearing “Kawaii”',
    },
    lives: [
      { date: '2016-11-24', title: 'good morning', venue: { ja: 'EX THEATER ROPPONGI', en: 'EX THEATER ROPPONGI' } },
      { date: '2017-02-18', title: '藤原さくら Special Live 2017', venue: { ja: 'オーチャードホール', en: 'Orchard Hall' } },
      { date: '2017-07-21', title: 'PLAY', venue: { ja: '中野サンプラザ', en: 'Nakano Sun Plaza' } },
      { date: '2017-12-15', title: 'Meet and Meat Tour 2017', venue: { ja: 'duo MUSIC EXCHANGE', en: 'duo MUSIC EXCHANGE' } },
      { date: '2018-07-15', title: '野外音楽会 2018', venue: { ja: '日比谷野外大音楽堂', en: 'Hibiya Open-Air Concert Hall' } },
      { date: '2018-10-27', title: 'Sakura Fujiwara tour 2018 yellow', venue: { ja: '静岡市民文化会館', en: 'Shizuoka Civic Cultural Hall' } },
      { date: '2019-09-27', title: '藤原さくら Twilight Tour 2019', venue: { ja: 'LIQUID ROOM', en: 'LIQUID ROOM' } },
      { date: '2024-05-18', title: 'Sakura Fujiwara Tour 2024 “wood mood”', venue: { ja: 'NHKホール', en: 'NHK Hall' } },
    ],
  },
  {
    name: { ja: 'chilldspot', en: 'chilldspot' },
    note: {
      ja: '『Monster』を初めて聴いた瞬間からファンです',
      en: 'A fan from the moment I first heard “Monster”',
    },
    lives: [
      { date: '2022-03-05', title: 'around dusk', venue: { ja: 'LIQUID ROOM', en: 'LIQUID ROOM' } },
      { date: '2022-10-26', title: 'Road Movie', venue: { ja: 'Zepp ダイバーシティ東京', en: 'Zepp DiverCity Tokyo' } },
      { date: '2023-06-29', title: 'Road Map', venue: { ja: 'LIQUID ROOM', en: 'LIQUID ROOM' } },
      { date: '2024-02-21', title: '模様', venue: { ja: 'Zepp ダイバーシティ東京', en: 'Zepp DiverCity Tokyo' } },
    ],
  },
];

export const literature = {
  body: [
    {
      ja: '主にミステリと純文学を嗜んでいます。',
      en: 'Mostly mystery and literary fiction.',
    },
    {
      ja: '本格よりは少し日常的な雰囲気の作品が好きです。',
      en: 'I prefer works with an everyday texture over pure classical puzzles.',
    },
    { ja: '特にバッドエンドが好物。', en: 'Bad endings are a particular delicacy.' },
  ] satisfies L[],
};

export type Author = {
  name: L;
  subName?: L;
  note: L;
};

export const authors: Author[] = [
  {
    name: { ja: '米澤穂信', en: 'Honobu Yonezawa' },
    subName: { ja: 'Honobu Yonezawa', en: '米澤穂信' },
    note: {
      ja: '一番好きな作家。高校のときに『さよなら妖精』を読んで衝撃を受けました',
      en: 'My favorite author. Reading “Sayonara Yosei” in high school knocked me sideways',
    },
  },
  {
    name: { ja: '湊かなえ', en: 'Kanae Minato' },
    subName: { ja: 'Kanae Minato', en: '湊かなえ' },
    note: {
      ja: 'バッドエンドの女王だが心温まる作品も好き。好きな作品は敢えての『往復書簡』',
      en: 'The queen of bad endings, though I love her warmer works too. My pick, deliberately, is “Ofuku Shokan”',
    },
  },
  {
    name: { ja: '綿矢りさ', en: 'Risa Wataya' },
    subName: { ja: 'Risa Wataya', en: '綿矢りさ' },
    note: {
      ja: '綿矢りさと言えば『蹴りたい背中』ですが『夢を与える』という作品が好きすぎて',
      en: 'She is known for “The Back I Want to Kick”, but I am far too fond of “Yume o Ataeru”',
    },
  },
  {
    name: { ja: '芦沢央', en: 'Yo Ashizawa' },
    subName: { ja: 'Yo Ashizawa', en: '芦沢央' },
    note: {
      ja: '最近のイチオシ。米澤穂信と湊かなえの正当な継承者な気がする',
      en: 'My current top recommendation — she feels like the rightful heir to Yonezawa and Minato',
    },
  },
];

export const alcohol = {
  body: [
    {
      ja: 'ビールとワインと日本酒とウィスキーが好きです。',
      en: 'Beer, wine, sake, and whisky.',
    },
  ] satisfies L[],
  items: [
    { ja: 'ビール', en: 'Beer' },
    { ja: 'ワイン', en: 'Wine' },
    { ja: '日本酒', en: 'Sake' },
    { ja: 'ウィスキー', en: 'Whisky' },
  ] satisfies L[],
};

export const werewolf = {
  body: [
    {
      ja: '2020年から Among Us にハマりその後からハマっています。',
      en: 'I got hooked on Among Us in 2020, and the obsession stuck.',
    },
    { ja: '好きな役職は人狼です。', en: 'My favorite role is the werewolf itself.' },
    {
      ja: '好きなプレイヤーは高田健志・しんたろー・うめけん・羊飼いK。',
      en: 'Favorite players: Takada Kenshi, Shintaro, Umeken, and Hitsujikai K.',
    },
  ] satisfies L[],
};
