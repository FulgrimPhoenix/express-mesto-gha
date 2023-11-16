const { Router } = require("express");

const errorPath = Router();

errorPath.patch("/:voidrequest", (req, res) => {
  return res.status(404).send({ message: "не удалось найти страницу" });
});

module.exports = errorPath;
