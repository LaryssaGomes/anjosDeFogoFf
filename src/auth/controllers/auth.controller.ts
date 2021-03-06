import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import RequestWithUser from '../interfaces/request-user.interface';
import { Response } from 'express';
import { AuthService } from '../services/auth.service';
import JwtAuthenticationGuard from '../jwt/jwt-authentication.guard';
import RegisterDto from '../dtos/register.dto';
import { LocalAuthenticationGuard } from '../jwt/localAuthentication.guard';
import { UsersService } from 'src/users/services/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authenticationService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(JwtAuthenticationGuard)
  @Get()
  authenticate(@Req() request: RequestWithUser) {
    const user = request.user;
    user.password = undefined;
    return user;
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('log-out')
  async logOut(@Req() request: RequestWithUser, @Res() response: Response) {
    response.setHeader(
      'Set-Cookie',
      this.authenticationService.getCookieForLogOut(),
    );
    return response.sendStatus(200);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWithUser) {
    const { user } = request;

    const accessTokenCookie =
      this.authenticationService.getCookieWithJwtAccessToken(user.id);
    const { cookie: refreshTokenCookie, token: refreshToken } =
      this.authenticationService.getCookieWithJwtRefreshToken(user.id);

    await this.usersService.setCurrentRefreshToken(refreshToken, user.id);

    request.res.setHeader('Set-Cookie', [
      accessTokenCookie,
      refreshTokenCookie,
    ]);
    return user;
  }

  @Post('register')
  async register(@Body() registrationData: RegisterDto): Promise<RegisterDto> {
    return this.authenticationService.register(registrationData);
  }

  @Get('lista')
  @UseGuards(JwtAuthenticationGuard)
  async lista(): Promise<RegisterDto[]> {
    return this.authenticationService.lista();
  }
}
