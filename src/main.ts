import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CryptoModule } from './agents/crypto/crypto.module';

async function bootstrap() {
  const app = await NestFactory.create([AppModule, CryptoModule]);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
