/**
 * Utility to extract a clean, absolute HTTP/HTTPS URL string from various formats
 * (e.g. direct URLs, or Markdown link syntax `[label](url)`).
 */
export function cleanUrl(url?: string | null): string | null {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  // 1. Markdown link format: [text](https://...)
  const markdownMatch = trimmed.match(/\]\((https?:\/\/[^\)]+)\)/);
  if (markdownMatch) return markdownMatch[1];

  // 2. Direct http/https URL
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  // 3. Fallback: find any http/https URL in the string
  const anyUrlMatch = trimmed.match(/https?:\/\/[^\s\)\"]+/);
  if (anyUrlMatch) return anyUrlMatch[0];

  return null;
}
