export const rem = (value: any) =>
  isNaN(value) ? value : Number(value) * 0.0625 + 'rem';
