import { ConfigEnv, defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import tsconfigPaths from 'vite-tsconfig-paths';
import swc from 'unplugin-swc';

export default defineConfig(({ command, mode }: ConfigEnv) => {
  return {
    optimizeDeps: {
      exclude: [
        '@nestjs/microservices',
        '@nestjs/websockets',
        'cache-manager',
        'class-transformer',
        'class-validator',
      ],
    },
    plugins: [
      swc.vite({
        tsconfigFile: './tsconfig.build.json',
      }),
      tsconfigPaths(),
      ...VitePluginNode({
        adapter: 'nest',
        appPath: './src/main.ts',
        tsCompiler: 'swc',
        initAppOnBoot: true,
      }),
    ],
  };
});
