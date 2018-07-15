import * as express from 'express';
import * as bodyParser from 'body-parser';

import { notFoundError, errorHandler } from './middlewares/errors.middleware';
import { router as groceriesRoutes } from './controllers/groceries.routes';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

app.use('/api/groceries', groceriesRoutes);

app.use(notFoundError);
app.use(errorHandler);

export const server = async () => {
  await app.listen(process.env.PORT);
  console.log(`Server started at http://localhost:${process.env.PORT}`);
  console.log(`Press Ctrl+C to quit`);
};
