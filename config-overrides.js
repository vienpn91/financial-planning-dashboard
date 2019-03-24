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
  },
});

module.exports = override(babelConfig, overrideAntTheme);
