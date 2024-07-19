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
