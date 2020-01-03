import Express from 'express';
import { setRoutes } from './routes';
import { initDatabase } from './database';
import { initEnvironment } from './env';
import { Server } from 'http';
import cors from 'cors';

export const initServer = () => {
  initEnvironment();

  const app: Express.Application = Express();

  const defaultPort = 1337;
  const port: number = Number(process.env.API_SERVER_PORT) || defaultPort;

  app.set('port', port);
  app.use(cors());
  setRoutes(app);
  initDatabase();

  const http = new Server(app);
  http.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
};
