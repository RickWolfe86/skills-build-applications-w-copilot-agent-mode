import { connectDatabase } from './config/database.js';
import { app, baseUrl } from './server.js';

const port = 8000;

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`OctoFit Tracker API listening at ${baseUrl}`);
    });
  })
  .catch((error) => {
    console.error('Unable to start API:', error);
    process.exit(1);
  });