import express from 'express';


const app = express();

import loginRouter from './controllers/login';

app.use('/', loginRouter);

app.listen(8082, () => {
  console.log('Server is running on http://localhost:8082');
});