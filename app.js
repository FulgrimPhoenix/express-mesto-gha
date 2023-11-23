import router from './routes/app.js'
import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());

const { PORT = 3000, URL = "mongodb://0.0.0.0:27017/mestodb" } = process.env;

mongoose
  .connect(URL)
  .then(() => console.log('Connected to data base'))
  .catch((err) => console.log(`We have some troubles: ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server listening PORT:${PORT}`);
});

// app.use((req, res, next) => {
//   req.user = {
//     _id: '655b72d72a9d400e76d7904c'
//   };

//   next();
// });

app.use(router);
