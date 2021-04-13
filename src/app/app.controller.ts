import { controller, IAppController } from "@foal/core";
import { createConnection } from "typeorm";

import { ApiController, LoginController } from "./controllers";

export class AppController implements IAppController {
  subControllers = [
    controller("/api", ApiController),
    controller("/api", LoginController),
  ];

  async init() {
    await createConnection();
  }
}
