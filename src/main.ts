import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config'; // For accessing env variables
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const port = config.get<number>('PORT') ?? 9009;

  await app.listen(port);
  console.log(`App running on port ${port}...🚀`);
}
bootstrap();
