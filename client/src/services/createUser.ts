import axios from 'axios';
import { ISignupResult } from '../Interfaces/ISignupResult';
import { ISignupModel } from '../Interfaces/signup';

const createUser = (signupModel: ISignupModel): Promise<ISignupResult> => axios.post('/api/v1/user/adduser/', {
  firstName: signupModel.firstName,
  lastName: signupModel.lastName,
  phoneNumber: signupModel.phoneNumber,
  email: signupModel.email,
  password: signupModel.password,
  flatNumber: signupModel.flatNumber,
});

export default createUser;
