import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

/**
 * ブログとしては運用しないが、ICFP-PC の参加記だけは単独ページとして残す。
 * 旧サイト (Hugo) と同じ `/post/<日付>/` で配信するため、
 * ディレクトリ名をそのまま id にする。
 */
const posts = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/posts',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { posts };
