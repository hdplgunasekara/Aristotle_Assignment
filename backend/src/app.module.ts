import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadModule } from './lead/lead.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    LeadModule,
    EmailModule,
    MongooseModule.forRoot(
      'mongodb+srv://itp2022:itp2022@cluster0.sqoif.mongodb.net/leads_db?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
