import { controller, IAppController } from "@foal/core";
import { createConnection } from "typeorm";

import {
  ApiController,
  AuthController,
  BookingController,
  RoomController,
  SignupController,
} from "./controllers";

export class AppController implements IAppController {
  subControllers = [
    controller("/api", ApiController),
    controller("/api", BookingController),
    controller("/api", RoomController),
    controller("/auth", AuthController),
    controller("/auth", SignupController),
  ];

  async init() {
    await createConnection();
  }
}
