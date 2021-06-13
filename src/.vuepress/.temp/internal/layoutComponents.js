import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/vuepressBeta/node_modules/vuepress-theme-hope/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("D:/vuepressBeta/node_modules/vuepress-theme-hope/client/layouts/Layout.js")),
}
