import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CustomerController } from './controllers/customer.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CUSTOMER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001, // Puerto del microservicio de clientes
        },
      },
    ]),
  ],
  controllers: [CustomerController],
})
export class AppModule {}
