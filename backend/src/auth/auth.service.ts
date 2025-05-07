import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, contrasena: string) {
    const user = await this.usuarioRepo.findOne({
      where: { email },
      relations: ['tipo_usuario'],
    });

    if (!user || user.contrasena !== contrasena) return null;
    return user;
  }

  generateToken(user: Usuario) {
    return this.jwtService.sign({
      sub: user.id,
      tipo: user.tipo_usuario.nombre,
    });
  }
}
