import * as yup from 'yup';

const announcementSchema = yup.object().shape({
  title: yup.string().required(),
  startDate: yup.string().required(),
  endDate: yup.string().required(),
});

export default announcementSchema;
