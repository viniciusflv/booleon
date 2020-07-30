import { backgroundCss } from '../css';
import { booleon } from '../lib/booleon';

const tags = ['div', 'section'] as const;

export const View = booleon(tags, backgroundCss);