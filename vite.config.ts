import path from 'node:path'
import { defineConfig, loadEnv } from 'vite';

import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Unocss from 'unocss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: env.VITE_BASE_PATH || '',
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    build: {
      outDir: path.resolve(__dirname, 'docs'),
      // publicPath: env.VITE_PUBLIC_PATH || '/webpage_test/assets',
    },
    css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
        api: 'modern-compiler',
      },
    },
  },

  plugins: [
    Vue(),

    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: ['.vue', '.md'],
      dts: 'src/typed-router.d.ts',
    }),

    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),
  ],

  server: {
    host: '0.0.0.0', // 监听所有网络接口
  },
  };
});

// https://vitejs.dev/config/
// export default defineConfig({
//
//   base: '/webpage_test/',
//   resolve: {
//     alias: {
//       '~/': `${path.resolve(__dirname, 'src')}/`,
//     },
//   },
//
//   // assetsInclude: [
//   //   '/public/carousel/*.jpg',
//   //   '/src/assets/data/Research/*/*.png',
//   //   '/src/assets/data/Research/*/*.jpg',
//   //   '/src/assets/data/Team/avatars/*.jpg',
//   //   '/src/assets/data/Team/avatars/*.png',
//   //   '/src/assets/data/Team/avatars/*.jpeg',
//   // ],
//
//   build: {
//     outDir: path.resolve(__dirname, 'docs'), // 设置输出路径为 docs
//   },
//
//
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@use "~/styles/element/index.scss" as *;`,
//         api: 'modern-compiler',
//       },
//     },
//   },
//
//   plugins: [
//     Vue(),
//
//     // https://github.com/posva/unplugin-vue-router
//     VueRouter({
//       extensions: ['.vue', '.md'],
//       dts: 'src/typed-router.d.ts',
//     }),
//
//     Components({
//       // allow auto load markdown components under `./src/components/`
//       extensions: ['vue', 'md'],
//       // allow auto import and register components used in markdown
//       include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
//       resolvers: [
//         ElementPlusResolver({
//           importStyle: 'sass',
//         }),
//       ],
//       dts: 'src/components.d.ts',
//     }),
//
//     // https://github.com/antfu/unocss
//     // see uno.config.ts for config
//     Unocss(),
//   ],
//
//   server: {
//     host: '0.0.0.0', // 监听所有网络接口
//   },
// })
