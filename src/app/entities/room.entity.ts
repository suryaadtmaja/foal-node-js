// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Booking } from "./booking.entity";

@Entity()
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomNumber: number;

  @Column()
  name: string;

  @Column()
  typeRoom: string;
}
