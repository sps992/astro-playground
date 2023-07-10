import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import basicSsl from '@vitejs/plugin-basic-ssl';

const env = loadEnv("", process.cwd(), 'STORYBLOK')
//const env = 'RwertdSuli3ucrGSv3Btsgtt';
// https://astro.build/config
export default defineConfig({
    vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      //accessToken: env,
      components: {
      config: 'storyblok/Config',
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
      },
    }),
    tailwind({
    config: {
      applyBaseStyles: false
    }
  }), preact()]
});