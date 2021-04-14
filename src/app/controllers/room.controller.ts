import {
  Context,
  Post,
  HttpResponseBadRequest,
  HttpResponseOK,
  ValidateBody,
} from "@foal/core";

import { Room } from "../entities";

export class RoomController {
  @Post("/create-room")
  @ValidateBody({
    additionalProperties: false,
    properties: {
      name: { type: "string" },
      typeRoom: { type: "string" },
      roomNumber: { type: "number" },
    },
    required: ["name", "typeRoom", "roomNumber"],
    type: "object",
  })
  async createRoom(ctx: Context) {
    try {
      const room = new Room();
      room.name = ctx.request.body.name;
      room.typeRoom = ctx.request.body.typeRoom;
      room.roomNumber = ctx.request.body.roomNumber;
      await room.save();
      return new HttpResponseOK({
        message: "Room created successfully",
      });
    } catch (e) {
      console.log(e);
      return new HttpResponseBadRequest(e);
    }
  }
}
