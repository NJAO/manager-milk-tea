import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @Column('text')
  openid: string;

  @Column({
    default: false,
  })
  isDelete: false;

  @Column('text')
  nickname: string;

  @Column('text')
  avatar: string;

  @Column()
  gender: number;

  @Column('text', { select: false, default: null })
  mobile: string;

  @Column('text')
  appid: string;

  @Column('text', { select: false, default: null })
  salt: string;

  @Column('text', { select: false, default: null })
  token: string;
}
