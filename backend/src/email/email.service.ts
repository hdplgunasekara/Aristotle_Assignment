import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import * as EmailValidator from 'email-validator';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class EmailService {
  constructor() {}

  async validateEmail(email: any): Promise<Boolean> {
    try {
      return EmailValidator.validate(email.email);
    } catch (error) {
      Logger.error(error.message);
      throw new Error(error.message);
    }
  }
}
