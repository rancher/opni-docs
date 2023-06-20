// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rancher Opni',
  tagline: '',
  url: 'https://opni.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'rancher',
  projectName: 'opni-docs',

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/rancher/opni-docs/edit/main/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v0.10',
            }
          },
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-56382716-14',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    // algolia: {
    //   // The application ID provided by Algolia
    //   appId: '',

    //   // Public API key: it is safe to commit it
    //   apiKey: '',

    //   indexName: '',

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   // Optional: path for search page that enabled by default (`false` to disable it)
    //   searchPagePath: 'search',
    // },
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    prism: {
      additionalLanguages: ['rust'],
    },
    navbar: {
      title: "",
      logo: {
        alt: 'logo',
        src: '/img/assets/logo-horizontal-opni.svg',
      },
      items: [
        {
          href: 'https://github.com/rancher/opni',
          label: 'GitHub',
          position: 'right',
          className: 'navbar__github',
        },
        {
          type: 'docsVersion',
          position: 'left',
//          dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} SUSE Rancher. All Rights Reserved.`,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      background: {
        light: 'rgba(75, 75, 75, 0.7)',
        dark: 'rgba(0, 0, 0, 0.7)',
      }
    }
  },
  plugins: [
    [require.resolve('docusaurus-lunr-search'), { indexBaseUrl: true }],
    require.resolve("docusaurus-plugin-image-zoom")
  ],
};

module.exports = config;
