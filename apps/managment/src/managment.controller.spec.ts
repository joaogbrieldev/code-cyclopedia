import { Test, TestingModule } from '@nestjs/testing';
import { ManagmentController } from './managment.controller';
import { ManagmentService } from './managment.service';

describe('ManagmentController', () => {
  let managmentController: ManagmentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ManagmentController],
      providers: [ManagmentService],
    }).compile();

    managmentController = app.get<ManagmentController>(ManagmentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(managmentController.getHello()).toBe('Hello World!');
    });
  });
});
