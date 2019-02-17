import path from 'path';

const config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'MY_LOCAL_DB_NAME';

// Client id and client secret for OAuth 2.0
// NOTE: The client secret should be kepy secret! Preferably set this variable
// as an environment variable; for now, this is public for debugging purposes.
// NOTE: If these are changed, then you will also need to update the frontend
// (use the new Base64 encoding of these objects -> id:secret)
// Happens to be: MY_BASE_64_ENCODING
config.clientId = process.env.authClient || 'MY_LOCAL_CLIENT_ID';
config.clientSecret = process.env.authSecret || 'MY_LOCAL_CLIENT_SECRET';

config.serverPort = process.env.PORT || 5000;

if (process.env.NODE_ENV == 'test') {
    console.log("USING TEST ENV")
    config.dbHost = 'localhost';
    config.dbPort = '27017';
    config.dbName = 'MY_TEST_DB_NAME';
    config.serverPort = 6000;
}

export default config;