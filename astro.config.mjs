import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl'
const env = loadEnv("", process.cwd(), 'STORYBLOK')
import preact from "@astrojs/preact";

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
        components: {
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