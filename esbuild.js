const fs = require('fs');
const path = require('path');

require('esbuild').build({
  absWorkingDir: process.cwd(),
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  platform: 'node',
  target: 'node16',
  format: 'cjs',
  pure: ['console.log'],
  logLevel: 'info',
  bundle: true,
  keepNames: true,
  treeShaking: true,
  sourcemap: true,
  plugins: [
    {
      name: 'clear out',
      setup: ({
        onStart,
        initialOptions: { absWorkingDir, outfile, outdir },
      }) => {
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
    },
  ],
}).catch(() => process.exit(1));
