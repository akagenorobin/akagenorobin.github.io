const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ESCAPES[c]!);
}

/**
 * データ層に残る `[text](https://…)` 記法だけをリンクに変換する。
 * 全文 Markdown は不要なので、外部リンクに限った最小の変換に留めている。
 */
export function renderInline(text: string): string {
  return escapeHtml(text).replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    (_match, label: string, url: string) =>
      `<a class="link link-out" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`,
  );
}
