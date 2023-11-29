import winston from "winston";
import exspressWinston from "express-winston";

export const requestLogger = exspressWinston.logger({
  transports: [new winston.transports.File({ filename: "request.log" })],
  format: winston.format.json(),
});

export const errorLogger = exspressWinston.errorLogger({
  transports: [new winston.transports.File({ filename: "error.log" })],
  format: winston.format.json(),
});