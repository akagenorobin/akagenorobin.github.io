import type { L } from './config';

export const ui = {
  navHome: { ja: 'Home', en: 'Home' },
  navFavorite: { ja: 'Favorite', en: 'Favorite' },

  skipToContent: { ja: '本文へスキップ', en: 'Skip to content' },
  toggleTheme: { ja: 'テーマを切り替える', en: 'Toggle theme' },
  switchLanguage: { ja: '言語を切り替える', en: 'Switch language' },

  homeMetaDescription: {
    ja: 'akagenorobin のポートフォリオサイト。経歴・スキル・コンテスト参加歴をまとめています。',
    en: "akagenorobin's portfolio — career, skills, and programming contest history.",
  },
  favoriteMetaDescription: {
    ja: 'テニス・音楽・文学・お酒・人狼ゲーム。好きなものについて。',
    en: 'Tennis, music, literature, drinks, and social deduction games.',
  },

  heroEyebrow: { ja: 'Portfolio', en: 'Portfolio' },
  avatarCredit: {
    ja: 'アイコンは [@yahei2021](https://twitter.com/yahei2021) さんに描いていただきました。',
    en: 'Avatar illustration by [@yahei2021](https://twitter.com/yahei2021).',
  },
  heroCtaAbout: { ja: '経歴を見る', en: 'View career' },
  heroCtaFavorite: { ja: '好きなものを見る', en: 'What I love' },

  sectionExplore: { ja: 'もっと見る', en: 'Explore' },
  exploreFavoriteLead: {
    ja: 'テニス・音楽・文学・お酒・人狼ゲーム',
    en: 'Tennis, music, literature, drinks, and werewolf',
  },

  sectionWorks: { ja: 'プロダクト', en: 'Products' },
  worksLead: {
    ja: '開発に関わっているプロダクトと、過去に関わっていたプロダクトです。',
    en: 'Products I work on now, and ones I worked on in the past.',
  },
  sectionEducation: { ja: '学歴', en: 'Education' },
  sectionCareer: { ja: '職歴', en: 'Career' },
  sectionSkills: { ja: 'スキル', en: 'Skills' },
  sectionLanguages: { ja: '利用言語', en: 'Languages' },
  sectionStacks: { ja: 'フレームワーク等', en: 'Frameworks & Platforms' },
  sectionLikes: { ja: '好きなこと', en: 'What I Value' },
  sectionStrengths: { ja: '得意なこと', en: 'Strengths' },
  sectionArticles: { ja: '参考記事', en: 'Interviews & Articles' },
  articleUnavailable: { ja: '非公開', en: 'No longer public' },
  articleUnavailableNote: {
    ja: '掲載元で非公開になったため読めません',
    en: 'The publisher has taken this article down, so it can no longer be read.',
  },
  sectionContests: { ja: 'コンテストなど', en: 'Contests' },
  sectionOther: { ja: 'その他', en: 'Other' },

  sectionTennis: { ja: 'テニス', en: 'Tennis' },
  sectionMusic: { ja: '音楽', en: 'Music' },
  sectionArtists: { ja: '好きなアーティスト', en: 'Favorite Artists' },
  sectionLiterature: { ja: '文学', en: 'Literature' },
  sectionAuthors: { ja: '好きな作家', en: 'Favorite Authors' },
  sectionAlcohol: { ja: 'お酒', en: 'Drinks' },
  sectionWerewolf: { ja: '人狼ゲーム', en: 'Werewolf' },

  liveHistory: { ja: 'ライブ参戦歴', en: 'Live history' },
  liveCountLabel: { ja: '公演', en: 'shows' },
  standings: { ja: '順位表', en: 'Standings' },
  resultsSheet: { ja: '結果表', en: 'Results' },
  report: { ja: '参加記', en: 'Write-up' },
  sectionTournaments: { ja: '大会参加歴', en: 'Tournaments' },
  disqualified: { ja: '失格', en: 'Disqualified' },
  contestEntries: { ja: '回参加', en: 'entries' },
  contestBest: { ja: '最高', en: 'best' },

  builtWith: { ja: 'Built with Astro', en: 'Built with Astro' },
} satisfies Record<string, L>;

export type UiKey = keyof typeof ui;
