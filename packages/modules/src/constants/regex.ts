export const NUMBER = '(\\d+|neg_(\\d+))';
export const HEX_COLOR = '^[A-Fa-f0-9]{6}$|^[A-Fa-f0-9]{3}$';
export const RGB_COLOR = `${NUMBER}_${NUMBER}_${NUMBER}_${NUMBER}|${NUMBER}_${NUMBER}_${NUMBER}`;
