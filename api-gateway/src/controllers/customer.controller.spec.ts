import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './customer.controller';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';

describe('CustomerController', () => {
  let controller: CustomerController;
  let clientProxy: ClientProxy;

  const mockClientProxy = {
    send: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [
        {
          provide: 'CUSTOMER_SERVICE',
          useValue: mockClientProxy,
        },
      ],
    }).compile();

    controller = module.get<CustomerController>(CustomerController);
    clientProxy = module.get<ClientProxy>('CUSTOMER_SERVICE');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getCustomers', () => {
    it('should return a list of customers', (done) => {
      const mockCustomers = [{ id: 1, name: 'John Doe' }];
      jest.spyOn(clientProxy, 'send').mockReturnValue(of(mockCustomers));

      controller.getCustomers().subscribe((result) => {
        expect(result).toEqual(mockCustomers);
        expect(clientProxy.send).toHaveBeenCalledWith(
          { cmd: 'get_customers' },
          {},
        );
        done();
      });
    });
  });

  describe('createCustomer', () => {
    it('should create a customer and return the result', (done) => {
      const customerData = { name: 'Jane Doe' };
      const mockResponse = { id: 1, name: 'Jane Doe' };
      jest.spyOn(clientProxy, 'send').mockReturnValue(of(mockResponse));

      controller.createCustomer(customerData).subscribe((result) => {
        expect(result).toEqual(mockResponse);
        expect(clientProxy.send).toHaveBeenCalledWith(
          { cmd: 'create_customer' },
          customerData,
        );
        done();
      });
    });
  });

  describe('updateCustomer', () => {
    it('should update a customer and return the result', (done) => {
      const customerId = '1';
      const customerData = { name: 'John Smith' };
      const mockResponse = { id: 1, name: 'John Smith' };
      jest.spyOn(clientProxy, 'send').mockReturnValue(of(mockResponse));

      controller
        .updateCustomer(customerId, customerData)
        .subscribe((result) => {
          expect(result).toEqual(mockResponse);
          expect(clientProxy.send).toHaveBeenCalledWith(
            { cmd: 'update_customer' },
            { customerId, customerData },
          );
          done();
        });
    });
  });
});
