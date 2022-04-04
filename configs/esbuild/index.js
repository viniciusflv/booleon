const fs = require('fs');
const path = require('path');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

const clearOutDir = () => ({
  name: 'clear',
  setup: ({ onStart, initialOptions: { absWorkingDir, outfile, outdir } }) => {
    onStart(() => {
      const dir = path.resolve(
        absWorkingDir || __dirname,
        path.dirname(outfile || outdir),
      );
      if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true });
      }
    });
  },
});

module.exports = ({
  outfile = `dist/index.js`,
  entryPoints = ['src/index.ts'],
  inject,
} = {}) => {
  require('esbuild')
    .build({
      absWorkingDir: process.cwd(),
      outfile,
      entryPoints,
      format: 'cjs',
      platform: 'node',
      target: 'node16',
      pure: ['console.log'],
      logLevel: 'info',
      bundle: true,
      treeShaking: true,
      sourcemap: true,
      minify: false,
      plugins: [nodeExternalsPlugin(), clearOutDir()],
      inject: inject && [path.resolve(__dirname, 'inject.js')],
    })
    .catch(() => process.exit(1));
};
