import { Controller, Post, Get, Patch, Body ,Param } from '@nestjs/common';
import { LeadService } from './lead.service';
import { CreateLeadDto } from './dto/create.lead.dto';
import { UpdateLeadDto } from './dto/update.lead.dto';
import { Lead } from './interface/lead.interface';

@Controller('leads')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post('/')
  async createLead(@Body() CreateLeadDto: CreateLeadDto) {
    return this.leadService.create(CreateLeadDto);
  }

  @Get('/')
  async getClient() {
  const lead: Lead[] = await this.leadService.findAllPendingLeads();
  return lead;
  }

  @Patch('/:id')
  async updateCompetitor(
    @Param('id') id,
    @Body() lead: UpdateLeadDto,
  ) {
    const updatedLead = await this.leadService.updateLead(
      id,
      lead,
    );
    return updatedLead;
  }
}