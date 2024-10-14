export interface ISignupResult {
  data: Message;
}

interface Message {
  message: string;
  status?: number;
}
export interface IErrorSignupResult {
  response: ApiResponse;
}
interface ApiResponse {
  data: ApiData;
  status: number;

}
interface ApiData {
  message: string [] | string
}
