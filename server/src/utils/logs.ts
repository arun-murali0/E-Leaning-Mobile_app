/* This TypeScript code snippet is setting up a logging configuration using the Winston library. Here's
a breakdown of what it does: */

import { format, createLogger, transports } from 'winston';

const { combine, colorize, timestamp, json } = format;

const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}-->${message}`;
  })
);

const logger = createLogger({
  level: 'info',
  format: combine(colorize(), timestamp(), json()),
  transports: [
    new transports.Console({
      format: consoleLogFormat,
    }),
    new transports.File({ filename: 'app.log' }),
  ],
});

export default logger;
