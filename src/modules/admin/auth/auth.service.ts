import { Injectable } from '@nestjs/common';
import { JwtService } from 'passport-jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = { name: 'Joan', password: '123456' };
    if (user && user.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(code: string): Promise<any> {
    // 登录校验
    const payload = { code };
    return { access_token: this.jwtService.sign(payload) };
  }
}
