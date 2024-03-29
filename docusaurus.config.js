// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rancher Opni',
  tagline: '',
  url: 'https://docs.opni.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'rancher',
  projectName: 'opni-docs',



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
              label: 'v0.5',
            }
          }
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
      disableSwitch: true,
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
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: false,
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
  },
  plugins: [
    [require.resolve('docusaurus-lunr-search'),
        {
            indexBaseUrl: true
        }
    ]
  ],
};

module.exports = config;
