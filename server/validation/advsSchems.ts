import * as yup from 'yup';

const advsSchema = yup.object().shape({
  title: yup.string().required(),
  startDate: yup.string().required(),
  endDate: yup.string().required(),
  image: yup.string().required(),
});

export default advsSchema;
