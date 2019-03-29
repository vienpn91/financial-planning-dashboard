import ApiUtils, { RequestConfig } from '../../utils/apiUtils';

export default class AuthService {
  public static async login(user: any): Promise<any> {
    const url: string = '/login';
    const data = { ...user };
    const config: RequestConfig = {
      apiVersion: '',
    };
    return ApiUtils.HTTP.post(url, data, config);
  }
  public static async checkEmail(email: string): Promise<any> {
    const url: string = '/auth/email';
    const data = { email };
    const config: RequestConfig = {
      apiVersion: ApiUtils.API_VERSION_1,
    };
    return ApiUtils.HTTP.post(url, data, config);
  }
}
