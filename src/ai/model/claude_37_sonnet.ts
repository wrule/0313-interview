import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

const provider = createOpenAICompatible({
  name: 'test',
  apiKey: process.env.PROVIDER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
});

const claude_37_sonnet = provider('anthropic/claude-3.7-sonnet');

export default claude_37_sonnet;
