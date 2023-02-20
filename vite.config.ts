import { defineConfig } from 'vite';
import { obfuscator } from 'rollup-obfuscator';

export default defineConfig({
  define: {},
  plugins: [
    obfuscator({
      compact: true,
      controlFlowFlattening: false,
      deadCodeInjection: false,
      debugProtection: false,
      disableConsoleOutput: false,
      identifierNamesGenerator: 'hexadecimal',
      log: false,
      numbersToExpressions: false,
      renameGlobals: false,
      rotateStringArray: true,
      selfDefending: false,
      shuffleStringArray: true,
      simplify: true,
      splitStrings: false,
      stringArray: true,
      stringArrayEncoding: [],
      stringArrayIndexShift: true,
      stringArrayWrappersCount: 1,
      stringArrayWrappersChainedCalls: true,
      stringArrayWrappersParametersMaxCount: 2,
      stringArrayWrappersType: 'variable',
      stringArrayThreshold: 0.75,
      unicodeEscapeSequence: false,
    }),
  ],
  server: {
    host: true,
    port: 9812,
    strictPort: true, // 端口已被占用则会直接退出
  },
});
