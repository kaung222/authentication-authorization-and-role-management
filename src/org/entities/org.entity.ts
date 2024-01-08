// import { UserEntity } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Org {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  //   @Column({ nullable: true })
  //   @ManyToOne(() => UserEntity, (user) => user.id)
  //   owner: UserEntity;
  @Column()
  ownerId: string;
}
