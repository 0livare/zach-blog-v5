/** @type {import("prettier").Config} */
export default {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  bracketSpacing: false,
  printWidth: 100,

  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
