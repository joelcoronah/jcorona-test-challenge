import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';

describe('PaymentController', () => {
  let controller: PaymentController;
  let clientProxy: ClientProxy;

  const mockClientProxy = {
    send: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [
        {
          provide: 'PAYMENT_SERVICE',
          useValue: mockClientProxy,
        },
      ],
    }).compile();

    controller = module.get<PaymentController>(PaymentController);
    clientProxy = module.get<ClientProxy>('PAYMENT_SERVICE');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createPayment', () => {
    it('should create a payment and return the result', (done) => {
      const paymentData = { amount: 100, payer: { email: 'test@example.com' } };
      const mockResponse = { id: 1, status: 'success' };
      jest.spyOn(clientProxy, 'send').mockReturnValue(of(mockResponse));

      controller.createPayment(paymentData).subscribe((result) => {
        expect(result).toEqual(mockResponse);
        expect(clientProxy.send).toHaveBeenCalledWith(
          { cmd: 'create_payment' },
          paymentData,
        );
        done();
      });
    });
  });
});
