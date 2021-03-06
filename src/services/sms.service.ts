import { SmsControllerApi, Configuration, SMSs as ISms } from './sms-api';

const dev = 'http://localhost:9000';

const restConfig = new Configuration({
  basePath: dev,
  baseOptions: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});

const restApi = new SmsControllerApi(restConfig);

class SmsService extends SmsControllerApi {
  async sendMessage(payload: ISms) {
    const response = await restApi.sendSms(payload);
    return response.data;
  }
}

const smsService = new SmsService();
export default smsService;
