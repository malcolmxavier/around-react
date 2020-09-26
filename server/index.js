const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;
const path = require('path');
const userRouter = require('./routers/users');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRouter);

app.listen(PORT, () => {
  console.log('Server is live!');
});
