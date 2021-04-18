const { readFileSync, readdirSync, writeFileSync, writeSync } = require('fs');
const { resolve, dirname } = require('path');
const { parse } = require('svgson');
const SVGO = require('svgo');
const svgo = new SVGO({
  plugins: [
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { cleanupEnableBackground: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: true },
    { mergePaths: true },
    {
      convertShapeToPath: {
        convertArcs: true,
      },
    },
    { sortAttrs: true },
    { removeDimensions: true },
  ],
});

const dirName = process.argv[2];

function handleChildren(child) {
  return child.reduce((acc, { name, attributes, children }) => {
    if (['path', 'stop', 'animate'].includes(name)) {
      if (acc[`${name}s`]) {
        if (children.length === 0) {
          return {
            ...acc,
            [`${name}s`]: [...acc[`${name}s`], attributes],
          };
        }
        return {
          ...acc,
          [`${name}s`]: [
            ...acc[`${name}s`],
            { ...attributes, ...handleChildren(children) },
          ],
        };
      }
      if (children.length === 0) return { ...acc, [`${name}s`]: [attributes] };
      return {
        ...acc,
        [`${name}s`]: [{ ...attributes, ...handleChildren(children) }],
      };
    }
    if (children.length === 0) return { ...acc, [name]: attributes };
    return { ...acc, [name]: handleChildren(children) };
  }, {});
}

async function parseToJson(fileName) {
  const { data } = await svgo.optimize(
    readFileSync(resolve(dirName, fileName), {
      encoding: 'utf8',
    }),
  );

  const {
    attributes: { viewBox, fill },
    children,
  } = await parse(data, { camelcase: true });

  return {
    viewBox,
    fill,
    ...handleChildren(children),
  };
}

(async () => {
  const fileNames = readdirSync(dirName);
  const indexes = await fileNames.reduce(async (acc, fileName) => {
    const key = fileName.split('.')[0];
    const value = await parseToJson(fileName);
    const accumulator = await acc;

    writeFileSync(
      resolve(dirname(dirName), `${key}.ts`),
      `export const ${key} = ${JSON.stringify(value, undefined, 2)}`,
    );

    return `${accumulator}export * from './${key}';\n`;
  }, Promise.resolve(''));

  writeFileSync(resolve(dirname(dirName), 'index.ts'), indexes);
})();
