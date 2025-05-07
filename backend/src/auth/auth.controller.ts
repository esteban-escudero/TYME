import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const user = await this.authService.validateUser(dto.email, dto.contrasena);
    
    if (!user || user.contrasena !== dto.contrasena) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const token = this.authService.generateToken(user);

    return {
      id: user.id,
      nombre: user.nombre,
      tipo: user.tipo_usuario.nombre,
      token,
    };
  }
}
