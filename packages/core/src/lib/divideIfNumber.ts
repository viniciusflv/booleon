export const divideIfNumber = (value: any, divider: number, suffix: string = '') =>
  isNaN(value) ? value : Number(value) / divider + suffix;
