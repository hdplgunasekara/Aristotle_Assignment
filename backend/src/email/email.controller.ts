import { Controller, Post, Get, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly leadService: EmailService) {}

  @Post('/')
  async createLead(@Body() email: String) {
    return this.leadService.validateEmail(email);
  }
}
