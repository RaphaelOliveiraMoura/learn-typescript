import express, { Application } from 'express';
import cors from 'cors';

import routes from './routes';

class App {
  public server: Application;

  constructor() {
    this.server = express();
  }

  routes() {
    this.server.use(cors());
    this.server.use(routes);
  }
}

export default new App().server;
