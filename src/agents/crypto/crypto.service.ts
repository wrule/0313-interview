import { Injectable } from '@nestjs/common';
import { generateText } from 'ai';
import { mastra } from 'src/ai/mastra';

@Injectable()
export class CryptoService {
  async getText() {
    const agent = mastra.getAgent('weatherAgent');
    const response = await agent.generate(`What's the weather like in Tokyo?`);
    return response.text;
  }
}
