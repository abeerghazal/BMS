import * as yup from 'yup';

const complaintsSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
});

export default complaintsSchema;
