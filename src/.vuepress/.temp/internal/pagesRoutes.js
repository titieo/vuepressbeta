import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Home",["/index.html","/Readme.md"]],
  ["v-74bc627b","/about/","",["/about/index.html","/about/index.md"]],
  ["v-2c450bd0","/disclamer/","WEBSITE DISCLAIMER",["/disclamer/index.html","/disclamer/index.md"]],
  ["v-b8a77846","/article/opencore/Desktop/igpu-dgpu/i7-9700k-z390-gaming-x.html","I7-9700K + Z390 GAMING X",["/article/opencore/Desktop/igpu-dgpu/i7-9700k-z390-gaming-x.md"]],
  ["v-04114b76","/article/opencore/Desktop/igpu-dgpu/i9-9900K-Asus-z390-pro-gaming-rt5700xt.html","I9-9900K + Asus Z390-PRO GAMING + RT5700XT",["/article/opencore/Desktop/igpu-dgpu/i9-9900K-Asus-z390-pro-gaming-rt5700xt.md"]],
  ["v-51d86647","/article/opencore/Desktop/igpu-dgpu/ryzen-5-3500x-msi-b450m.html","Ryzen 5 3500X + MSI B450M",["/article/opencore/Desktop/igpu-dgpu/ryzen-5-3500x-msi-b450m.md"]],
  ["v-444d54b0","/article/opencore/Desktop/igpu-dgpu/ryzen-7-1700-rx570-asrock-x370.html","Ryzen 7 1700 + RX570 + Asrock x370",["/article/opencore/Desktop/igpu-dgpu/ryzen-7-1700-rx570-asrock-x370.md"]],
  ["v-4aa802a2","/article/opencore/Desktop/igpu-dgpu/z490%20tomahawk.html","MSI Z490 Tomahawk",["/article/opencore/Desktop/igpu-dgpu/z490 tomahawk.html","/article/opencore/Desktop/igpu-dgpu/z490 tomahawk.md","/article/opencore/Desktop/igpu-dgpu/z490%20tomahawk.md"]],
  ["v-3706649a","/404.html","",[]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
