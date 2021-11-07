const fs = require('fs');
const path = require('path');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

require('esbuild')
  .build({
    absWorkingDir: process.cwd(),
    outfile: `dist/index.js`,
    entryPoints: ['src/index.ts'],
    format: 'cjs',
    platform: 'node',
    target: 'node16',
    pure: ['console.log'],
    logLevel: 'info',
    bundle: true,
    treeShaking: true,
    sourcemap: true,
    minify: true,
    plugins: [nodeExternalsPlugin(), clearOutDir()],
  })
  .catch(() => process.exit(1));

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
