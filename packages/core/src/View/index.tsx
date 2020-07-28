import { booleon } from '../helpers/booleon';

const tags = ['div', 'section'] as const;

type Tags = typeof tags[number];

export const View = booleon<Tags>(tags);