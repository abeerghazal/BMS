import {
  object, string,
} from 'yup';

const contactSchema = object({
  name: string().required(),
  email: string().email().required(),
  phone: string().min(10).required(),
  subject: string().required(),
  description: string().required(),
});

export default contactSchema;
