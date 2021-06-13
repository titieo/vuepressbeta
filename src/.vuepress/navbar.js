const { navbarConfig } = require("vuepress-theme-hope");

module.exports = {
  vi: navbarConfig([
    { text: "About", link: "/about/"},
    { text: "Disclamer", link: "/disclamer/"},
    {
      text: "Type of PC",
      icon: "info",
      prefix: "/tags/",
      items: [
        { text: "Desktop with iGPU", link: "desktop-with-igpu/", icon: "creative" },
      ],
    },
    {
      text: "Bootloaders",
      icon: "info",
      prefix: "/category/",
      items: [
        { text: "OpenCore", link: "opencore/", icon: "creative" },
        { text: "Clover", link: "clover/", icon: "markdown" },
      ],
    },
  ]),

  en: navbarConfig([
    { text: "About", link: "/about/"},
    { text: "Disclamer", link: "/disclamer/"},
    {
      text: "Type of PC",
      icon: "info",
      prefix: "/tags/",
      items: [
        { text: "Desktop with iGPU", link: "desktop-with-igpu/", icon: "creative" },
      ],
    },
    {
      text: "Bootloaders",
      icon: "info",
      prefix: "/category/",
      items: [
        { text: "OpenCore", link: "opencore/", icon: "creative" },
        { text: "Clover", link: "clover/", icon: "markdown" },
      ],
    },
  ]),
};