import { IUserRepository } from "../db/repository/types";
import { IUpdateUserPayload, IUserPayload } from "../entities/user.entity";
import { HttpResponse } from "../utils";
import { IHttpResponse, IUserService } from "./types";

export class UserService implements IUserService<IUserPayload, IHttpResponse> {
  constructor(private userRepository: IUserRepository) {}

  async getAll(): Promise<IHttpResponse> {
    try {
      const users = await this.userRepository.getAll();

      if (users.length) {
        return HttpResponse.okResponse(users);
      }

      return HttpResponse.notFoundResponse();
    } catch (error: any) {
      return HttpResponse.internalServerErrorResponse();
    }
  }

  async create(data: IUserPayload): Promise<IHttpResponse> {
    try {
      const createdUser = await this.userRepository.create(data);

      return HttpResponse.createdResponse(createdUser);
    } catch (error: any) {
      return HttpResponse.internalServerErrorResponse();
    }
  }

  async getByEmail(email: string): Promise<IHttpResponse> {
    try {
      const user = await this.userRepository.getByEmail(email);

      if (!user) {
        return HttpResponse.notFoundResponse();
      }

      return HttpResponse.okResponse(user);
    } catch (error: any) {
      return HttpResponse.internalServerErrorResponse();
    }
  }

  async update(id: number, data: IUpdateUserPayload): Promise<IHttpResponse> {
    try {
      const updatedUser = await this.userRepository.update(id, data);

      return HttpResponse.okResponse(updatedUser);
    } catch (error: any) {
      return HttpResponse.internalServerErrorResponse();
    }
  }

  async delete(id: number): Promise<IHttpResponse> {
    try {
      const deletedUser = await this.userRepository.delete(id);

      if (!deletedUser) {
        return HttpResponse.badRequestResponse();
      }

      return HttpResponse.okResponse(deletedUser);
    } catch (error: any) {
      return HttpResponse.internalServerErrorResponse();
    }
  }
}
