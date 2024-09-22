import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3001, // El puerto donde escucha el microservicio de clientes
      },
    },
  );
  await app.listen();
  console.log('Customer microservice is running on port 3001');
}
bootstrap();
