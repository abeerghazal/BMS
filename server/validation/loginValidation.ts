import * as yup from 'yup';

const loginValidation = yup.object().shape({
  phoneNumber: yup.string().required().min(7).max(14),
  password: yup.string().required().min(8).max(16),
});

export default loginValidation;
