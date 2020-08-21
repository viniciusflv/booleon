export const divideIfNumber = (value: any, divider: number, suffix = '') =>
  isNaN(value) ? value : Number(value) / divider + suffix;
