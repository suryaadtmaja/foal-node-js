import { controller, IAppController } from "@foal/core";
import { createConnection } from "typeorm";

import {
  ApiController,
  AuthController,
  BookingController,
  RoomController,
} from "./controllers";

export class AppController implements IAppController {
  subControllers = [
    controller("/api", ApiController),
    controller("/api", BookingController),
    controller("/api", RoomController),
    controller("/auth", AuthController),
  ];

  async init() {
    await createConnection();
  }
}
