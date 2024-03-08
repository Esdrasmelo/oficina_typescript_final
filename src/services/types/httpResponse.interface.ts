export interface IHttpResponse<DataType = any> {
  status: number;
  data?: DataType;
  message?: string;
}
