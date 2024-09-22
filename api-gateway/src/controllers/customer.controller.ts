import {
  Controller,
  Get,
  Post,
  Body,
  Inject,
  Put,
  Param,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('customers')
export class CustomerController {
  constructor(
    @Inject('CUSTOMER_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  getCustomers(): Observable<any> {
    return this.client.send({ cmd: 'get_customers' }, {});
  }

  @Post()
  createCustomer(@Body() customerData: any): Observable<any> {
    return this.client.send({ cmd: 'create_customer' }, customerData);
  }

  @Put('/:customerId')
  updateCustomer(
    @Param('customerId') customerId: string,
    @Body() customerData: any,
  ): Observable<any> {
    return this.client.send(
      { cmd: 'update_customer' },
      { customerId, customerData },
    );
  }
}
