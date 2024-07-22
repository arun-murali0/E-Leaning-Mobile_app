/* This code snippet is defining a `morgonLogFormat` object that contains a `stream` property with a
`write` method. The `write` method takes a `message` parameter and processes it to extract
information about the request. It then creates a `logObject` with properties for the HTTP method,
URL, status code, and response time. Finally, it logs this `logObject` using the `info` method of
the `logger` object imported from the './logs' module. */
import logger from './logs';
export const morgonLogFormat = {
  stream: {
    write: (message: any) => {
      const logObject = {
        method: message.split('')[0],
        url: message.split(' ')[1],
        status: message.split(' ')[2],
        responseTime: message.split(' ')[3],
      };
      logger.info(JSON.stringify(logObject));
    },
  },
};
