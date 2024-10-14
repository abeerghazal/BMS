import * as yup from 'yup';

const servicesSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  isFixed: yup.boolean().required(),
  description: yup.string().required(),
  isOpen: yup.boolean().default(true),
});

export default servicesSchema;
