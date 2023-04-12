import { Test, TestingModule } from '@nestjs/testing';
import { LeadController } from './lead.controller';
import { LeadService } from './lead.service';

describe('LeadController', () => {
  let leadController: LeadController;

  const mockLeadService = {
    create: jest.fn(dto => {
        return {
            ...dto,
            _id:Date.now(),
            __v:Date.now(),
        }
    }),
    };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LeadController],
      providers: [LeadService],
    }).overrideProvider(LeadService).useValue(mockLeadService).compile();

    leadController = app.get<LeadController>(LeadController);
  });

  describe('Lead', () => {
    it('should be defined"', () => {
        expect(leadController).toBeDefined();
    });
    
    it('should return created lead', () => {
      expect(leadController.createLead(({
        firstName: "John",
        lastName: "Doily",
        email: "Jon@gmail.com",
        company: "ABC",
        jobTitle: "Tech Lead",
        personalizationLine: "This is a personalization line",
        status: "Pending"
    }))).toBe({
        firstName: "John",
        lastName: "Doily",
        email: "Jon@gmail.com",
        company: "ABC",
        jobTitle: "Tech Lead",
        personalizationLine: "This is a personalization line",
        status: "Pending",  
        _id:expect.any(Number),
        __v:expect.any(Number),
    });
    });
  });
});
