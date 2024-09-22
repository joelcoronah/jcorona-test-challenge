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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {
  constructor(
    @Inject('CUSTOMER_SERVICE') private readonly client: ClientProxy,
  ) {}

  @ApiOperation({ summary: 'Get all customers' })
  @ApiResponse({ status: 200, description: 'List of all customers.' })
  @Get()
  getCustomers(): Observable<any> {
    return this.client.send({ cmd: 'get_customers' }, {});
  }

  @ApiOperation({ summary: 'Create a customer' })
  @ApiResponse({ status: 201, description: 'Customer successfully created.' })
  @Post()
  createCustomer(@Body() customerData: any): Observable<any> {
    return this.client.send({ cmd: 'create_customer' }, customerData);
  }

  @ApiOperation({ summary: 'Update a customer' })
  @ApiResponse({ status: 201, description: 'Customer successfully updated.' })
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
