// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'cupstui',
  tagline: 'A terminal interface for CUPS',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://icortesb.github.io',
  baseUrl: '/cupstui-web/docs/',

  organizationName: 'icortesb',
  projectName: 'cupstui-web',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/icortesb/cupstui-web/edit/main/docs/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'cupstui',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/icortesb/cupstui',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Getting Started', to: '/getting-started/installation'},
              {label: 'Usage', to: '/usage/keys'},
              {label: 'How it works', to: '/how-it-works'},
            ],
          },
          {
            title: 'Project',
            items: [
              {label: 'Source', href: 'https://github.com/icortesb/cupstui'},
              {label: 'Releases', href: 'https://github.com/icortesb/cupstui/releases'},
              {label: 'Issues', href: 'https://github.com/icortesb/cupstui/issues'},
            ],
          },
        ],
        copyright: `cupstui is MIT licensed. Docs built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.nightOwlLight,
        darkTheme: prismThemes.nightOwl,
      },
    }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
      }),
    ],
  ],
};

export default config;
