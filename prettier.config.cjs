/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  singleAttributePerLine: true
};
