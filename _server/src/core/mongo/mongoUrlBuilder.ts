export default () => {
  let mongoUrl = 'mongodb://';

  // add domain & port
  mongoUrl += process.env.MONGO_URL || 'localhost:27017';

  // add db name
  mongoUrl += `/${process.env.MONGO_NAME}`;

  // return mongo url
  return mongoUrl;
};
