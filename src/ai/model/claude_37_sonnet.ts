import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

const provider = createOpenAICompatible({
  name: 'test',
  apiKey: process.env.PROVIDER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

const model = provider('anthropic/claude-3.7-sonnet');

export default model;
