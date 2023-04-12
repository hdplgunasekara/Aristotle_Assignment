/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lead } from './interface/lead.interface';
import { CreateLeadDto } from './dto/create.lead.dto';
import { UpdateLeadDto } from './dto/update.lead.dto';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class LeadService {
  constructor(
    @InjectModel('Lead') private readonly leadModel: Model<Lead>,
  ) {}
  async create(CreateLeadDto: CreateLeadDto): Promise<Lead> {
    try {
        const lead = await this.leadModel.create(CreateLeadDto);
        return lead;
    } catch (error) {
      Logger.error(error.message);
      throw new Error(error.message);
    }
  }

  async findAllPendingLeads (): Promise<Lead[]> {
    try {
      const lead = await this.leadModel.find({ status : 'Pending' });
      if (lead.length === 0) {
        throw new NotFoundException('Leads not found');
      }
      return lead;
    } catch (error) {
      Logger.error(error.message);
      throw new NotFoundException('Leads not found');
    }
  }

  async updateLead(
    id: string,
    updateLeadDto: UpdateLeadDto,
  ): Promise<Lead> {
    try {
      if (updateLeadDto.status === 'Rejected') {
        if(updateLeadDto.feedback === undefined) {
          throw new NotFoundException('Feedback is required');
        }
      }
      const lead = await this.leadModel
        .findByIdAndUpdate(id, updateLeadDto, { new: true })
        .exec();

      if (!lead) {
        throw new NotFoundException('Lead not updated');
      }

      return lead;
    } catch (error) {
      Logger.error(error.message);
      throw new NotFoundException('Lead not updated');
    }
  }
}
