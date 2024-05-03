export default () => ({
  app: {
    name: 'Test',

    isDev: process.env.NODE_ENV == 'development',
  },

  database: {
    url: 'localhost',
  },
});
