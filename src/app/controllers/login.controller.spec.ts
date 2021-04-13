// std
import { ok, strictEqual } from "assert";

// 3p
import {
  Context,
  createController,
  getHttpMethod,
  getPath,
  isHttpResponseOK,
} from "@foal/core";

// App
import { LoginController } from "./login.controller";

describe("LoginController", () => {
  // let controller: LoginController;

  // beforeEach(() => (controller = createController(LoginController)));

  describe("has a login method", () => {
    it("should handle requests at POST /login", () => {
      strictEqual(getHttpMethod(LoginController, "login"), "POST");
      strictEqual(getPath(LoginController, "login"), "/login");
    });
  });
});
