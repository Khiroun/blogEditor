const getBackendUrl = () => {
  const devBackendUrl = process.env.REACT_APP_FIREBASE_DEV_BACKEND_URL;
  const prodBackendUrl = process.env.REACT_APP_FIREBASE_PROD_BACKEND_URL;
  const nodeEnv = process.env.NODE_ENV;
  const backendUrl = nodeEnv === "development" ? devBackendUrl : prodBackendUrl;
  console.log(process.env);

  return backendUrl;
};

module.exports = {
  getBackendUrl,
};
