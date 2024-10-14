import axios from 'axios';
import { IFlatsUsersResponse } from '../Interfaces/IFlatsUsersResult';

const getFlatsUsers = (payload:string, signal:AbortSignal): Promise<IFlatsUsersResponse> => axios.get(`/api/v1/flats/Users?${payload}`, { signal });

export default getFlatsUsers;
