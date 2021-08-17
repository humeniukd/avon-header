import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  env: {
    settingsApi: 'http://54.72.110.252:31477/.rest/delivery/'
  },
  namespace: 'avon-header',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'dist-hydrate-script'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      includePaths: ['node_modules'],
    })
  ]
};
