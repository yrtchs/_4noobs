const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const PORT = process.env.PORT;

module.exports = {
  DB_NAME: DB_NAME,
  DB_USERNAME: DB_USERNAME,
  DB_PASSWORD: DB_PASSWORD,
  JWT_SECRET_KEY: JWT_SECRET_KEY,
  MONGODB_URI: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.uqkn0.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  PORT: PORT,
};
