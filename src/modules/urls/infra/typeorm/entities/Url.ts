import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('urls')
class Url {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  url: string;

  @Column()
  shorted_url: string;

  @CreateDateColumn()
  expires_in: Date;

  @UpdateDateColumn()
  created_at: Date;
}

export default Url;
