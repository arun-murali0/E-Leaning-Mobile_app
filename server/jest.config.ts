import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  maxConcurrency: 5,
  coverageProvider: 'babel',
};

export default config;
