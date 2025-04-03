import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation TP02",
  base: "/appweb_trpr02_docs/",
  description:
    "Documentation du TP02 du cours Développement d'applications Web",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Accueil", link: "/" },
      { text: "Semaine 1", link: "/semaine-1" },
      { text: "Semaine 2", link: "/semaine-2" },
      { text: "Semaine 3", link: "/semaine-3" },
    ],

    sidebar: [
      {
        text: "Revues de code",
        items: [
          { text: "Semaine 1", link: "/semaine-1" },
          { text: "Semaine 2", link: "/semaine-2" },
          { text: "Semaine 3", link: "/semaine-3" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
