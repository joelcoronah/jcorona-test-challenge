import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CustomerController } from './controllers/customer.controller';
import { PaymentController } from './controllers/payment.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CUSTOMER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'customer-service',
          port: 3001,
        },
      },
      {
        name: 'PAYMENT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'payment-service',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [CustomerController, PaymentController],
})
export class AppModule {}
