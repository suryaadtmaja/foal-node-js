import {
  Context,
  Post,
  HttpResponseBadRequest,
  HttpResponseOK,
} from "@foal/core";
import { User } from "../entities";

export class SignupController {
  @Post("/signup")
  async registerUser(ctx: Context) {
    try {
      const user = new User();
      user.email = ctx.request.body.email;
      user.fullname = ctx.request.body.fullname;

      await user.setPassword(ctx.request.body.password);

      await user.save();
      return new HttpResponseOK({
        message: `Registration success please confirm your email address ${user.email}`,
      });
    } catch (e) {
      console.log(e);
      return new HttpResponseBadRequest();
    }
  }
}
