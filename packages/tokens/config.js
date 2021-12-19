const StyleDictionary = require('style-dictionary');

/**
 * https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript#7616484
 */
function stringHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return String(hash);
}

const recursive = (tokens) => {
  return Object.keys(tokens).reduce((acc, key) => {
    const el = tokens[key];
    return {
      ...acc,
      [key]:
        typeof el === 'object'
          ? recursive(el)
          : typeof el === 'number'
          ? `${el * 0.0625}rem`
          : el,
    };
  }, {});
};

StyleDictionary.registerFormat({
  name: 'typescript/nested',
  formatter: function ({ dictionary, platform, options, file }) {
    return `export default ${JSON.stringify(
      recursive(dictionary.tokens),
      null,
      2,
    )} as const`;
  },
});

module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    ts: {
      transformGroup: 'web',
      buildPath: './src/',
      files: [
        {
          destination: 'index.ts',
          options: { showFileHeader: false },
          format: 'typescript/nested',
        },
      ],
    },
  },
};
