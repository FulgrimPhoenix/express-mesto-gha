const router = require("./routes/app");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const { PORT = 3000 } = process.env;
const URL = "mongodb://0.0.0.0:27017/mestodb";

mongoose
  .connect(URL)
  .then(() => console.log('Connected to data base'))
  .catch((err) => console.log(`We have some troubles: ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server listening PORT:${PORT}`);
});

app.use((req, res, next) => {
  req.user = {
    _id: '6550ce3563b19a21914d4ca5'
  };

  next();
});

app.use(router);
