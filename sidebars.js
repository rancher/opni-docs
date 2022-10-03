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
    'index',
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'deployment/quickstart',
        'deployment/basic',
        'deployment/advanced',
      ]
    },
    {
      type: 'category',
      label: 'Setup Guides',
      items: [
        'setup/gpu',
        'setup/log-shipping',
        'setup/setup-grafana-dashboard',
        'setup/metrics'
      ]
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/highlevel'
      ]
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/elasticsearch',
        'configuration/gpuadapter',
        'configuration/logadapter',
        'configuration/nats',
        'configuration/opnicluster',
        'configuration/pretrainedmodel',
        'configuration/s3',
        'configuration/dataprepper'
      ]
    },
    {
      type: 'category',
      label: 'Opni Logging',
      items: [
        'logging/logging',
        'logging/user-management'
      ]
    },
    {
      type: 'category',
      label: 'Log Anomaly',
      items: [
        'log-anomaly/log-anomaly'
      ]
    },
    {
      type: 'category',
      label: 'API Versions',
      items: [
        'apiversions/v1beta2'
      ]
    },
  ]
};

module.exports = sidebars;
