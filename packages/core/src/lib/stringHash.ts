/**
 * https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript#7616484
 */
export function stringHash(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return String(hash);
}
