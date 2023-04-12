import { Document } from 'mongoose';

export interface Lead extends Document {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  personalizationLine: string;
  status: LeadStatus;
  feedback?: string;
}
enum LeadStatus {
  Pending,
  Approved,
  Rejected,
}
