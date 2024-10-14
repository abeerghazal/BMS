import axios from 'axios';
import { ILoginResult } from '../Interfaces/ILoginResult';
import { ILoginModel } from '../Interfaces/loginModel';
import { authLogin } from '../Utilities/apiConstatnts';

const Login = (loginModel: ILoginModel): Promise<ILoginResult> => axios.post(authLogin, {
  phoneNumber: loginModel.phoneNumber,
  password: loginModel.password,
});

export default Login;
