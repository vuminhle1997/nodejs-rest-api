import Express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import swaggerUI from 'swagger-ui-express';
import swaggerOutput from './swagger.json';

const app = Express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerOutput));
app.use(bodyParser.json());
app.use('/api', routes);

export = app;
