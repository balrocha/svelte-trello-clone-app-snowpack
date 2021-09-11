/** @type {import("snowpack").SnowpackUserConfig } */

const production = process.env.NODE_ENV === 'production'

function babelOptions() {
  return {
    plugins: production 
      ? ['transform-remove-console']
      : []
  }
}

module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
    ['@snowpack/plugin-svelte', {
      preprocess: require('svelte-preprocess')({
        scss: {
          prependData: '@import "./src/scss/main.scss";'
        },
        postcss: {
          plugins: [
            require('autoprefixer')()
          ]
        },
        babel: babelOptions()
      })
    }], 
    ['@snowpack/plugin-babel', {
      transformOptions: babelOptions()
    }],
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-optimize'
  ],
  alias: {
    '~': './src'
  },
  routes: [
    /* Example: Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
