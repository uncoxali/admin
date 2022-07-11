const config = {
  firebase: {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID,
  },
  google: {
    API_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
    CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    SECRET: process.env.REACT_APP_GOOGLE_SECRET_KEY,
  },
  facebook: {
    APP_ID: process.env.REACT_APP_FACEBOOK_APP_ID,
  },
};

export default config;
