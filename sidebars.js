/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'index'
    },
    {
      type: 'category',
      label: 'Installation',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Install Opni',
          link: {
            type: 'doc',
            id: 'installation/opni/index'
          },
          items: [
            {
              type: 'doc',
              id: 'installation/opni/backends',
              label: 'Enable Backends'
            },
            {
              type: 'doc',
              id: 'installation/opni/aiops',
              label: 'Enable AIOps'
            },
            {
              type: 'doc',
              id: 'installation/opni/slo',
              label: 'Enable SLOs'
            }
          ]
        },
        {
          type: 'category',
          label: 'Install Opni Agent',
          link: {
            type: 'doc',
            id: 'installation/opni_agent/index'
          },
          items: [
            {
              type: 'doc',
              id: 'installation/opni_agent/capabilities',
              label: 'Enable Capabilities'
            }
          ]
        },
        {
          type: 'doc',
          id: 'installation/uninstall',
          label: 'Uninstall Opni'
        },
      ]
    },
    {
      type: 'category',
      label: 'Advanced Guides',
      items: [
        {
          type: 'category',
          label: 'Quickstart with Rancher Desktop',
          link: {
            type: 'doc',
            id: 'guides/rancher-desktop/index'
          },
          items: [
            {

            }
          ]
        },
        {
          type: 'category',
          label: 'Alerting User Guide',
          link: {
            type: 'doc',
            id: 'guides/alerting/index'
          },
          items: [
            {
              
            }
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
