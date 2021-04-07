const esbuildPluginTsc = require('esbuild-plugin-tsc');
require('esbuild')
  .build({
    entryPoints: [`${__dirname}/packages/core/src`],
    minify: true,
    bundle: true,
    outfile: 'out.js',
    plugins: [esbuildPluginTsc({ tsx: true, force: true, })],
  })
  .catch(() => process.exit(1));
