import { Injectable } from '@nestjs/common';
import { Customer, MercadoPagoConfig } from 'mercadopago';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CustomerService {
  client: any;
  constructor(private readonly configService: ConfigService) {
    const accessToken = this.configService.get<string>('ACCESS_TOKEN');
    this.client = new MercadoPagoConfig({
      accessToken: accessToken,
      options: { timeout: 5000, idempotencyKey: 'abc' },
    });
  }

  /**
   * Get all customers from Mercado Pago
   *
   * @returns {Promise<Customer[]>} - List of customers
   * @throws {Error} - If there is an error fetching customers
   */
  async getCustomers() {
    try {
      const customers = new Customer(this.client);
      const response = await customers.search();
      return response.results;
    } catch (error) {
      throw new Error(`Error fetching customers: ${error.message}`);
    }
  }

  /**
   * Create a new customer in Mercado Pago
   *
   * @param {object} customerData - Customer data to be created
   * @returns {Promise<any>} - Customer data created
   * @throws {Error} - If there is an error creating customer
   */
  async createCustomer(customerData: any) {
    try {
      const customers = new Customer(this.client);
      const response = await customers.create({ body: customerData });
      return response;
    } catch (error) {
      throw new Error(`Error creating customer: ${error.message}`);
    }
  }

  /**
   * Update a customer in Mercado Pago
   *
   * @param {object} data - Customer data to be updated
   * @param {string} data.customerId - Customer ID to be updated
   * @param {object} data.customerData - Customer data to be updated
   * @returns {Promise<any>} - Updated customer data
   * @throws {Error} - If there is an error updating customer
   */
  async updateCustomer(data: any) {
    try {
      const customers = new Customer(this.client);

      const { customerId, customerData } = data;

      const response = await customers.update({
        customerId,
        body: customerData,
      });
      return response;
    } catch (error) {
      throw new Error(`Error updating customer: ${error.message}`);
    }
  }
}
