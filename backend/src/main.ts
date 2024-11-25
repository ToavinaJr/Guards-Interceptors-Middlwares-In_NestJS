import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// import { AuthGuard } from './guards/auth.guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new AuthGuard());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
