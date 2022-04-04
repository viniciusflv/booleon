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

function flat(obj) {
  const res = {};
  function recursive(curr, accKey = undefined) {
    curr &&
      Object.keys(curr)
        .filter((key) => {
          if (typeof curr?.[key] === 'string') {
            res[accKey ? `${accKey}_${key}` : key] = curr[key];
            return false;
          }
          return true;
        })
        .forEach((key) =>
          recursive(curr[key], accKey ? `${accKey}_${key}` : key),
        );
  }
  recursive(obj);
  return res;
}

function flatFirstKey(params) {
  return Object.keys(params).reduce((acc, key) => {
    return { ...acc, [key]: flat(params[key]) };
  }, {});
}

StyleDictionary.registerTransform({
  name: 'time/seconds',
  type: 'value',
  matcher: function (prop) {
    return prop.attributes.category === 'time';
  },
  transformer: function (token) {
    return `${+token.original.value}s`;
  },
});

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

StyleDictionary.registerTransform({
  type: `value`,
  transitive: true,
  name: `size/aaa`,
  matcher: (token) => {
    return token.attributes.category === 'aaa';
  },
  transformer: (token) => {
    // token.value will be resolved and transformed at this point
    return `${Number(token.value) / 100}`;
  },
});

StyleDictionary.registerFormat({
  name: 'typescript/nested',
  formatter: function ({ dictionary }) {
    const tokens = flatFirstKey(minifyDictionary(dictionary.tokens));

    return Object.keys(tokens).reduce(
      (acc, key) =>
        (acc += `\nexport const ${key} = ${JSON.stringify(
          tokens[key],
          null,
          2,
        )} as const;\n`),
      '',
    );
  },
});

module.exports = {
  source: ['src/lib/**/*.js'],
  platforms: {
    ts: {
      transformGroup: 'web',
      buildPath: './src/',
      files: [
        {
          destination: 'index.ts',
          format: 'typescript/nested',
          options: { showFileHeader: false },
        },
      ],
      transforms: ['size/pxToRem', 'time/seconds', 'size/aaa'],
    },
  },
};
