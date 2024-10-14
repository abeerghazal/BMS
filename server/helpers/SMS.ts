import dotenv from 'dotenv';
import Vonage, { MessageError, MessageRequestResponse } from '@vonage/server-sdk';
import { SMSMessage } from '../interfaces/SMSMessage';
import CustomError from './customError';

dotenv.config();

const SendSMS = ({ recipient, message }: SMSMessage) : Promise<boolean> => {
  const {
    SMS_SECRET, SMS_KEY, PHONE_NUMBER_CODE,
  } = process.env;

  const vonage = new Vonage({
    apiKey: SMS_KEY,
    apiSecret: SMS_SECRET,
  });

  const sender = 'BMS';

  return new Promise<boolean>((resolve) => {
    vonage.message.sendSms(
      sender,
      PHONE_NUMBER_CODE + recipient,
      message,
      {},
      (err: MessageError, responseData: MessageRequestResponse) => {
        if (err) {
          throw new Error(err.status);
        } else if (responseData.messages[0].status === '0') {
          resolve(true);
        } else {
          throw new CustomError(400, `Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
      },
    );
  });
};

export default SendSMS;
