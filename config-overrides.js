const { override, fixBabelImports, addLessLoader } = require('customize-cra');

const babelConfig = fixBabelImports('import', {
  libraryName: 'antd',
  libraryDirectory: 'es',
  style: true,
});

const overrideAntTheme = addLessLoader({
  javascriptEnabled: true,
  modifyVars: {
    '@primary-color': '#038fde',
    '@link-color': '#1890ff',
    '@success-color': '#52c41a',
    '@warning-color': '#faad14',
    '@error-color': '#f5222d',
    '@font-size-base': '14px',
    '@heading-color': 'rgba(0, 0, 0, .85)',
    '@text-color': 'rgba(0, 0, 0, .65)',
    '@text-color-secondary': 'rgba(0, 0, 0, .45)',
    '@disabled-color': 'rgba(0, 0, 0, .25)',
    '@border-radius-base': '4px',
    '@border-color-base': '#d9d9d9',
    '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)',

    // Layout
    '@layout-body-background': '#fff',
    '@layout-header-background': '#fff',
    '@layout-footer-background': '@layout-body-background',
    '@layout-header-height': '56px',
    '@layout-header-padding': '0',
    '@layout-footer-padding': '24px 50px',
    '@layout-sider-background': '@layout-header-background',
    '@layout-trigger-height': '48px',
    '@layout-trigger-background': '#002140',
    '@layout-trigger-color': '#fff',
    '@layout-zero-trigger-width': '36px',
    '@layout-zero-trigger-height': '42px',

    // Layout light theme
    '@layout-sider-background-light': '#fff',
    '@layout-trigger-background-light': '#fff',
    '@layout-trigger-color-light': '@text-color',
    '@font-family': 'Nunito Sans',


    '@menu-inline-toplevel-item-height': '40px',
    '@menu-item-height': '40px',
    '@menu-collapsed-width': '80px',
    '@menu-bg': '@component-background',
    '@menu-popup-bg': '@component-background',
    '@menu-item-color': '@text-color',
    '@menu-highlight-color': '@primary-color',
    '@menu-item-active-bg': '@item-active-bg',
    '@menu-item-active-border-width': '3px',
    '@menu-item-group-title-color': '@text-color-secondary',
    // dark theme
    '@menu-dark-color': '@text-color-secondary-dark',
    '@menu-dark-bg': '@layout-header-background',
    '@menu-dark-arrow-color': '#fff',
    '@menu-dark-submenu-bg': '#000c17',
    '@menu-dark-highlight-color': '#fff',
    '@menu-dark-item-active-bg': '@primary-color',

    '@btn-primary-bg': '#192a6f99',
    '@btn-primary-color': '#fff',
    '@btn-shadow': '0 5px 16 0px rgba(2, 3, 31, 0.23)',
    '@btn-primary-shadow': '0 5px 16px 0px rgba(2, 3, 31, 0.23)',
    '@btn-text-shadow': '0 -1px 0 rgba(0, 0, 0, 0.12)',
    '@btn-disable-border': '#192a6f99',
  },
});

module.exports = override(babelConfig, overrideAntTheme);
