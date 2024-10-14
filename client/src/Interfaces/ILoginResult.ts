export interface ILoginResult {
  data: Message;
}

interface Message {
  message: string;
  role: string;
}

export interface IErrorLoginResult {
  response: Data;
}
interface Data {
  status: number;
}
