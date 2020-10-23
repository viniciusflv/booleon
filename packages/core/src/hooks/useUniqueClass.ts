export function useUniqueClass(...classes: string[]) {
  return Array.from(new Set(classes.filter(Boolean))).join(' ');
}
