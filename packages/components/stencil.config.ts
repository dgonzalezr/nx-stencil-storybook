import { resolve } from 'path';

import { angularOutputTarget as angular, ValueAccessorConfig } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

import { generateCustomElementsJson } from './src/tools';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'components',
  taskQueue: 'async',
  sourceMap: true,
  plugins: [sass()],
  outputTargets: [
    { type: 'docs-readme' },
    { type: 'docs-vscode', file: 'custom-elements.json' },
    { type: 'docs-custom', generator: generateCustomElementsJson },
    { type: 'dist', esmLoaderPath: './loader' },
    { type: 'dist-hydrate-script', dir: 'dist/hydrate' },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      minify: true,
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    /* -------------------------------------------------------------------------- */
    /*                           Framework output target                          */
    /* -------------------------------------------------------------------------- */
    angular({
      componentCorePackage: '@legion/components',
      directivesProxyFile: resolve(__dirname, '../components-angular/src/directives/components.ts').replace(/\\/g, '/'),
      directivesArrayFile: resolve(__dirname, '../components-angular/src/directives/index.ts').replace(/\\/g, '/'),
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    react({
      componentCorePackage: '@legion/components',
      proxiesFile: resolve(__dirname, '../components-react/src/components.ts').replace(/\\/g, '/'),
      includeDefineCustomElements: true,
    }),
  ],
  extras: {
    experimentalImportInjection: true,
    /**
     * Details:
     * https://stenciljs.com/docs/config-extras#experimentalslotfixes
     * https://discord.com/channels/520266681499779082/1108109881870925875/1143196247730176040
     */
    experimentalSlotFixes: true,
  },
  watchIgnoredRegex: /(custom-elements\.)((d\.ts)|(json))$/g,
  devServer: {
    openBrowser: false,
    port: 8001,
  },
};
