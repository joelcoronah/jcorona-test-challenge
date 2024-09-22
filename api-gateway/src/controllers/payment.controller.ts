import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('payments')
export class PaymentController {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Post()
  createPayment(@Body() paymentData: any): Observable<any> {
    return this.client.send({ cmd: 'create_payment' }, paymentData);
  }
}
