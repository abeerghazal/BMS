import * as yup from 'yup';

const SignUpSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phoneNumber: yup.string()
    .required()
    .min(7)
    .max(14),
  email: yup.string().email(),
  password: yup.string()
    .required()
    .min(8)
    .max(16),

});

export default SignUpSchema;
