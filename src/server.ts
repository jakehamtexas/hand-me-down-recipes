import Express from 'express';
import { setRoutes } from './routes';
import { initDatabase } from './database';
const app: Express.Application = Express();
const port: number = 8080; // default port to listen

app.set('port', port);
setRoutes(app);
initDatabase();
const http = require('http').Server(app);

http.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
