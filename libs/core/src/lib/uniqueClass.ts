export const uniqueClass = (...classes: string[]) =>
  Array.from(new Set(classes.filter(Boolean))).join(' ');
