const env: Record<string, any> = {
  TYPE: 'mysql',
  DB_HOST: 'localhost',
  DB_PORT: 3306,
  DB_USERNAME: 'root',
  DB_PASSWORD: 'ywj88888888',
  DB_DATABASE: 'test',

  JWT_SECRET: 'secret',
  JWT_TOKEN_AUDIENCE: 'localhost:3000',
  JWT_TOKEN_ISSUER: 'localhost:3000',
  JWT_ACCESS_TOKEN_TTL: 3600,
};

export default env;
