import router from './routes/app.js'
import express from 'express';
import mongoose from 'mongoose';
import { errors } from 'celebrate';
import cookieParser from "cookie-parser";
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

const { PORT = 3000, URL = "mongodb://0.0.0.0:27017/mestodb" } = process.env;

mongoose
  .connect(URL)
  .then(() => console.log('Connected to data base'))
  .catch((err) => console.log(`We have some troubles: ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server listening PORT:${PORT}`);
});

app.use(router);

app.use(errors());
app.use((err, req, res, next) => {
  // если у ошибки нет статуса, выставляем 500
  const { statusCode = 500, message } = err;

  res
    .status(statusCode)
    .send({
      // проверяем статус и выставляем сообщение в зависимости от него
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message
    });
});
