import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',

  colorPrimary: '#123985',
  colorSecondary: '#E9406C',

  // BRAND
  brandTarget: '_self',
  brandTitle: 'Golazo',
  // brandImage: './assets/branding/logos/golazo.svg',

  // UI
  appBg: '#F5F5F5',
  appContentBg: '#FFFFFF',

  // Typography
  fontBase: '"Open sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#040B1B',
  textInverseColor: '#666666',

  // Toolbar default and active colors
  barTextColor: '#040B1B',
  barSelectedColor: '#E9406C',
  barBg: 'rgba(0, 0, 0, 0.05)',
});

addons.setConfig({
  theme,
  enableShortcuts: false,
  selectedPanel: 'controls',
  sidebar: {
    showRoots: true,
  },
});
