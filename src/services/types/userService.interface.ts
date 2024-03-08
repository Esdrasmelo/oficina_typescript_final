import { IUserPayload } from "../../entities/user.entity";
import { IDefaultService } from "./defaultService.interface";
import { IServiceReturn } from "./serviceReturn.interface";

export interface IUserService<Payload, ServiceReturn>
  extends IDefaultService<Payload, ServiceReturn> {
  getByEmail: (email: string) => Promise<IServiceReturn>;
}
