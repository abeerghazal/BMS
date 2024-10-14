export interface SMSMessage {
  recipient: string;
  message: string;
}

interface UserSMS {
  id:number;
  flat: Flat;
  createdAt:Date;
}
interface Flat {
  id: number;
  flat_number: number;
  user: User;
}
interface User {
  id:number;
  phone_number:string
}

export type GetUserCntact = UserSMS | null | undefined | any;
