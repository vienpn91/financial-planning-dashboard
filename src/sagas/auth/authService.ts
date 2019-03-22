import ApiUtils, { RequestConfig } from '../../utils/apiUtils';

export default class AuthService {
  public static async login(user: any): Promise<any> {
    const url: string = '/login';
    const data = {...user};
    const config: RequestConfig = {
      apiVersion: '',
    };
    return ApiUtils.HTTP.post(url, data, config);
  }
}
