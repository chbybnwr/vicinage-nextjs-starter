const config = {
  plugins: {
    '@stylexjs/postcss-plugin': {
      importSources: ['styleDeck', 'StyleDeck', '@stylexjs/stylex'],
      useCSSLayers: true,
    },
    autoprefixer: {},
  },
}

export default config
