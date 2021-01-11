export const NUMBER = '\\d+';
export const LOWER_CASE = '[a-z]+';
export const LETTER = '[A-z]+';
export const HEX_COLOR = '[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}';
export const RGB_COLOR = `${NUMBER}_${NUMBER}_${NUMBER}_${NUMBER}|${NUMBER}_${NUMBER}_${NUMBER}`;
export const COLOR = `${RGB_COLOR}|${HEX_COLOR}`;
export const PREFIX = `((${LETTER})__)(.*)`;
