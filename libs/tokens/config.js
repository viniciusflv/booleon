const StyleDictionary = require('style-dictionary');

function minifyDictionary(obj) {
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  var toRet = {};

  if (obj.hasOwnProperty('value')) {
    return obj.value;
  } else {
    for(var name in obj) {
      if(obj.hasOwnProperty(name)) {
        toRet[name] = minifyDictionary(obj[name]);
      }
    }
  }
  return toRet;
}

StyleDictionary.registerFormat({
  name: 'typescript/nested',
  formatter: function ({ dictionary, platform, options, file }) {
    return `export default ${JSON.stringify(
      minifyDictionary(dictionary.tokens),
      null,
      2,
    )} as const`;
  },
});

module.exports = {
  source: ['src/**/*.json'],
  platforms: {
    ts: {
      transformGroup: 'web',
      buildPath: './dist/',
      files: [
        {
          destination: 'index.ts',
          format: 'typescript/nested',
          options: { showFileHeader: false },
        },
      ],
    },
  },
};
