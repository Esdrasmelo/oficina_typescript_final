import { IHttpResponse } from "../services/types";

export class HttpResponse {
  static okResponse<DataType>(data: DataType): IHttpResponse {
    return {
      status: 200,
      data,
    };
  }

  static createdResponse<DataType>(data: DataType): IHttpResponse {
    return {
      status: 201,
      data,
    };
  }

  static notFoundResponse(): IHttpResponse {
    return {
      status: 404,
      message: "Ops! Dados não encontrados.",
    };
  }

  static badRequestResponse(): IHttpResponse {
    return {
      status: 400,
      message: "Ops! Algo aconteceu.",
    };
  }

  static internalServerErrorResponse(): IHttpResponse {
    return {
      status: 500,
      message: "Ops! Algo aconteceu internamente.",
    };
  }
}
