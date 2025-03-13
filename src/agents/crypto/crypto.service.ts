import { Injectable } from '@nestjs/common';
import { mastra } from 'src/ai/mastra';

@Injectable()
export class CryptoService {
  async getText() {
    const agent = mastra.getAgent('CryptoAgent');
    const response = await agent.generate(`What's the weather like in Tokyo?`);
    return response.text;
  }
}
