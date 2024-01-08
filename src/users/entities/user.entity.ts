import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
// import { Org } from 'src/org/entities/org.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsNotEmpty()
  id: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ default: '', nullable: false })
  email: string;

  @IsEnum(['user', 'admin'])
  @Column({ default: 'user', nullable: false, enum: ['user', 'admin'] })
  role: string;

  // @Column({ nullable: true })
  // @OneToMany(() => Org, (org) => org.owner)
  // orgs: Org[];

  @IsNotEmpty()
  @Exclude()
  @Column({ default: '', nullable: false })
  password: string;
}
