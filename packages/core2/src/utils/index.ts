export const fastHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
};

export const uniqueClass = (...classes: string[]) =>
  Array.from(new Set(classes.filter(Boolean))).join(' ');

export const rem = (value: any) =>
  isNaN(value) ? value : Number(value) * 0.0625 + 'rem';

export const percentage = (value: any) =>
  isNaN(value) ? value : Number(value) / 100;
