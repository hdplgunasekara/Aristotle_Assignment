import { Schema } from 'mongoose';

export const LeadSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  personalizationLine: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: false,
  },
});
