const StyleDictionary = require('style-dictionary');

const rootPixelEm = (value) => {
  value = Number(value);
  return isNaN(value) ? value : value * 0.0625 + 'rem';
};

function minifyDictionary(obj) {
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  var toRet = {};

  if (obj.hasOwnProperty('value')) {
    return obj.value;
  } else {
    for (var name in obj) {
      if (obj.hasOwnProperty(name)) {
        toRet[name] = minifyDictionary(obj[name]);
      }
    }
  }
  return toRet;
}

StyleDictionary.registerTransform({
  type: `value`,
  transitive: true,
  name: `size/pxToRem`,
  matcher: (token) => {
    return token.attributes.category === 'rxm';
  },
  transformer: (token) => {
    // token.value will be resolved and transformed at this point
    return rootPixelEm(token.value);
  },
});

StyleDictionary.registerFormat({
  name: 'typescript/nested',
  formatter: function ({ dictionary }) {
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
      transforms: ['size/pxToRem'],
    },
  },
};
