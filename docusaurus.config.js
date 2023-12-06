// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Teclados Mecánicos",
  tagline: "Documentación",
  url: "https://docs.tecladosmecanicos.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TecladosMecanicosXYZ", // Usually your GitHub org/user name.
  projectName: "tm-docs-website", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        style: "dark",
        title: "Teclados Mecánicos",
        logo: {
          alt: "Logo de Teclados Mecánicos",
          src: "img/logo_tm_200x200.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentación",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://tecladosmecanicos.xyz",
            label: "Tienda Virtual",
            position: "right",
          },
        ],
      },
      footer: {
        // style: "dark",
        links: [
          {
            title: "Documentación",
            items: [
              // {
              //   label: "Tutorial",
              //   to: "/docs/intro",
              // },
              {
                label: "Guías de uso",
                to: "/docs/intro",
              },
              {
                label: "Guías de ensamble",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Comunidad",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/tecladosmecanicosxyz",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/tecladosmecanicosxyz",
              },
              {
                label: "Google Reviews",
                href: "https://g.page/r/CS0A1hRiHuJvEAI/review",
              },
              {
                label: "Trustpilot",
                href: "https://es.trustpilot.com/review/tecladosmecanicos.xyz",
              },
            ],
          },
          {
            title: "Teclados Mecánicos",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/TecladosMecanicosXYZ",
              },
              {
                label: "Términos y Condiciones",
                href: "https://tecladosmecanicos.xyz/terminos-y-condiciones/",
              },
              {
                label: "Tratamiento de Datos",
                href: "https://tecladosmecanicos.xyz/tratamiento-de-datos/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Teclados Mecánicos. Todos los Derechos Reservados. Creado con Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ["bash", "diff", "json"],
      },
    }),
};

module.exports = config;
