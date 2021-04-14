// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Room } from "./room.entity";

@Entity()
export class Booking extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  dateStart: string;

  @Column({ type: "date" })
  dateEnd: string;

  // prettier-ignore
  @ManyToOne(() => User, user => user.email)
  @JoinColumn()
  user: User;

  // prettier-ignore
  @ManyToOne(() => Room)
  @JoinColumn()
  room: Room;

  @CreateDateColumn({ type: "timestamptz", default: () => "now()" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", onUpdate: "NOW()", nullable: true })
  updatedAt: Date;
}
