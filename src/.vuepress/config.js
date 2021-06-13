module.exports = {
  title: "EFI Collection",
  description: "Collection of Clover and OpenCore EFI for Hackintosher✨",
  head: [
    ["link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    }],
  ],
  theme: 'vuepress-theme-hope',
  dest: "public",

    extendsMarkdown: (md) => {
    md.use(require("markdown-it-attrs"));
    md.use(require("markdown-it-task-checkbox"));
  },

  themeConfig: {
    logo: "/logo.png",
    hostname: "https://vuepress-theme-hope.github.io",

    author: "Cokaps",
    repo: "https://github.com/efi-collection/database",
    docsRepo: "https://github.com/efi-collection/efi-collection.github.io",
    repoDisplay: true,
    docsBranch: "master",
    docsDir: "blog/",
    editLinkText: "Thêm EFI của bạn!",

    navbar: [
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
      ],
    sidebar: [
      // SidebarItem
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // string - page file path
          '/disclamer/index.md',
        ],
      },
      // SidebarGroup
      {
        isGroup: true,
        text: 'Group',
        children: ['/about/README.md', '/about/README.md'],
      },
      // string - page file path
      '/about/README.md',
    ],

    blog: {
      avatar: "/avatar.png",
      name: "Cokaps",
      intro: "#",
      links: {
        'Bitbucket': 'https://bitbucket.org/cokaps016/',
        'Discord': 'https://discordapp.com/users/845978022732759071',
        'Email': 'cokaps@icloud.com',
        'Facebook': 'https://www.facebook.com/profile.php?id=100068786173924',
        'Github': 'https://github.com/Cokaps',
        'Gitlab': 'https://gitlab.com/cokaps',
        'Instagram': 'https://www.instagram.com/cokaps016/',
        'Linkedin': 'www.linkedin.com/in/cokaps',
        'Pinterest': 'https://www.pinterest.com/cokaps016/',
        'Reddit': 'https://www.reddit.com/u/Cokaps/',
        'Rss': '',
        'Steam': 'https://steamcommunity.com/id/cokaps/',
        'Twitter': 'https://twitter.com/cokaps016/',
      },
    },

    footer: {
      display: true,
      copyright: "MIT Licensed | Copyright © 2021 Cokaps",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "local",
    },

    themeColor: false,

    git: {
      timezone: "Asia/Bangkok",
    },

    mdEnhance: {
      tasklist: true,
      mark: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#46bd87",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-touch-icon.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/mstile-150x150.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/android-chrome-512x512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/android-chrome-192x192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
        ],
      },
    },
  },
};