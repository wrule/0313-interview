
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { CryptoAgent } from './agents';

export const mastra = new Mastra({
  agents: { CryptoAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
