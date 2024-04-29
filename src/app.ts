import Express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import swaggerUI from 'swagger-ui-express';

const express = Express();

express.use(bodyParser.json());
express.use('/api', routes);

export = express;
