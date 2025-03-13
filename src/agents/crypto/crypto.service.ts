import { Injectable } from '@nestjs/common';
import { generateText } from 'ai';
import claude_37_sonnet from 'src/ai/model/claude_37_sonnet';

@Injectable()
export class CryptoService {
  async getText() {
    const { text } = await generateText({
      model: claude_37_sonnet,
      prompt: 'Invent a new holiday and describe its traditions.',
    });
    return text;
  }
}
