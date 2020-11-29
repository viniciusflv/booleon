export function uniqueClass(...classes: string[]) {
  return Array.from(new Set(classes.filter(Boolean))).join(' ');
}
