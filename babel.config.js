module.exports = {
  presets: ['@babel/preset-react', 'jest'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.json', '.svg', '.png'],
        // Note: you do not need to provide aliases for same-name paths immediately under /src/
        alias: {
          components: './src/components',
          routes: './src/routes',
          screens: './src/screens',
          services: './src/services',
          shared: './src/shared',
        },
      },
    ],
  ],
};
