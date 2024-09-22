import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MercadoPagoConfig, Payment } from 'mercadopago';

@Injectable()
export class PaymentService {
  client: any;
  constructor(private readonly configService: ConfigService) {
    const accessToken = this.configService.get<string>('ACCESS_TOKEN');
    this.client = new MercadoPagoConfig({
      accessToken: accessToken,
      options: { timeout: 5000, idempotencyKey: 'abc' },
    });
  }

  async createPayment(paymentData: any) {
    try {
      const payment = new Payment(this.client);
      const result = await payment.create({ body: paymentData });

      return result;
    } catch (error) {
      console.log({ error });
      console.log(error.cause);
      throw new Error(`Error creating payment: ${error.message}`);
    }
  }
}
