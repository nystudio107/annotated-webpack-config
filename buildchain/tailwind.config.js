// module exports
module.exports = {
  purge: {
    content: [
      '../cms/templates/**/*.{twig,html}',
      '../src/vue/**/*.{vue,html}',
    ],
    layers: [
      'base',
      'components',
      'utilities',
    ],
    mode: 'layers',
    options: {
      whitelist: [
        '../src/css/components/**/*.{css}',
      ],
    }
  },
  theme: {
    // Extend the default Tailwind config here
    extend: {
    },
    // Replace the default Tailwind config here
  },
  corePlugins: {},
  plugins: [],
};
