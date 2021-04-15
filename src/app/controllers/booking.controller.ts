import { Context, Get, HttpResponseOK } from "@foal/core";
import { Booking } from "../entities";

import { JWTRequired } from "@foal/jwt";
import { getRepository } from "typeorm";

@JWTRequired()
export class BookingController {
  @Get("/bookings")
  async getAllBookings(ctx: Context) {
    const booking = await getRepository(Booking).find({
      where: { user: ctx.user.id },
      relations: ["room", "user"],
    });

    // const booking = await Booking.find({ user: ctx.user.id });
    // booking.room = await Booking.createQueryBuilder()
    //   .relation(room, "room")
    //   .getMany();
    return new HttpResponseOK(booking);
  }
  @Get("/booking/me")
  async getBooking(ctx: Context) {
    const booking = await getRepository(Booking).find({
      where: { user: ctx.user.id },
      relations: ["room", "user"],
    });

    // const booking = await Booking.find({ user: ctx.user.id });
    // booking.room = await Booking.createQueryBuilder()
    //   .relation(room, "room")
    //   .getMany();
    return new HttpResponseOK(booking);
  }
}
