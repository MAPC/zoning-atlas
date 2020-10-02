module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  env: {
    browser: true,
  },
};
