import * as yup from 'yup';

const updateUserSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email(),

});

export default updateUserSchema;
