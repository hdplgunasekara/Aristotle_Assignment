import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeadController } from './lead.controller';
import { LeadService } from './lead.service';
import { LeadSchema } from './schema/lead.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Lead', schema: LeadSchema }])],
  controllers: [LeadController],
  providers: [LeadService],
})
export class LeadModule {}
