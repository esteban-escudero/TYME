import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TipoUsuario } from '../tipo-usuario/tipo-usuario.entity';
// Asegúrate de que la ruta sea correcta


@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column()
  contrasena: string;

  @ManyToOne(() => TipoUsuario)
  tipo_usuario: TipoUsuario;
}
