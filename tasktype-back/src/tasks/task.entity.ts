import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Priority } from '../enums/priority';
import { Status } from '../enums/status';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    type: 'text',
  })
  title: string;
  @Column({
    type: 'varchar',
    length: 225,
  })
  date: string;
  @Column({
    type: 'longtext',
  })
  description: string;

  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.normal,
  })
  priority: Priority;
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.todo,
  })
  status: Status;
}

//this class is never gonna be initialized
