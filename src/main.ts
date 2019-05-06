import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  const hostDomain = AppModule.isDev
    ? `${AppModule.host}:${AppModule.port}`
    : AppModule.host;

  app.setGlobalPrefix(AppModule.prefix);

  await app.listen(AppModule.port);
  console.log(
    `\n➡➡ The server is online: ${hostDomain}/${AppModule.prefix}. Environment: ${
      AppModule.isDev ? 'dev' : 'prod'
    }, with Node.js ${process.versions.node}.`,
  );
};

bootstrap();
