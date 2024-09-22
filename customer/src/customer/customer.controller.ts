import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CustomerService } from './customer.service';

@Controller()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @MessagePattern({ cmd: 'get_customers' })
  async getCustomers() {
    return this.customerService.getCustomers();
  }

  @MessagePattern({ cmd: 'create_customer' })
  async createCustomer(customerData: any) {
    return this.customerService.createCustomer(customerData);
  }

  @MessagePattern({ cmd: 'update_customer' })
  async updateCustomer(data) {
    return this.customerService.updateCustomer(data);
  }
}
