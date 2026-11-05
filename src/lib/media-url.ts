/** The published origin also serves CDN assets for the Netlify copy. */
export function mediaUrl(path: string) {
  return path.startsWith("/") ? `https://lhc-group.lovable.app${path}` : path;
}