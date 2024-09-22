import { Module } from '@nestjs/common';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class AppModule {}
