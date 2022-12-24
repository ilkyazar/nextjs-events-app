module.exports = () => {
  return {
    env: {
      mongodb_username: process.env.MONGODB_USERNAME,
      mongodb_password: process.env.MONGODB_PASSWORD,
      mongodb_clustername: process.env.MONGODB_CLUSTER,
      mongodb_database: process.env.MONGODB_DATABASE,
      mongodb_collection: process.env.MONGODB_COLLECTION,
    },
  };
};
