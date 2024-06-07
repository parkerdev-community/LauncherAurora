import { join } from 'path';

import { defineConfig, swcPlugin } from 'electron-vite';
import vitePluginSvgr from 'vite-plugin-svgr';

const toDir = (dir: string) => join(__dirname, dir);

export default defineConfig({
    main: {
        plugins: [swcPlugin(), vitePluginSvgr()],
        build: {
            sourcemap: true,
        },
        resolve: {
            alias: [
                {
                    find: '@config',
                    replacement: toDir('config.ts'),
                },
                {
                    find: '@',
                    replacement: toDir('./src/renderer'),
                },
                {
                    find: '@assets',
                    replacement: toDir('./src/renderer/assets'),
                },
                {
                    find: '@components',
                    replacement: toDir('./renderer/components'),
                },
                {
                    find: '@hooks',
                    replacement: toDir('./src/renderer/hooks'),
                },
                {
                    find: '@utils',
                    replacement: toDir('./src/renderer/utils'),
                },
                {
                    find: '@pages',
                    replacement: toDir('./src/renderer/pages'),
                },
            ],
        },
    },
    preload: {
        build: {
            sourcemap: true,
        },
    },
    renderer: {
        build: {
            sourcemap: true,
        },
    },
});
