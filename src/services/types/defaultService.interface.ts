export interface IDefaultService<Payload, ServiceReturnType> {
  create: (data: Payload) => Promise<ServiceReturnType>;
  update: (id: number, data: Partial<Payload>) => Promise<ServiceReturnType>;
  getAll: () => Promise<ServiceReturnType>;
  delete: (id: number) => Promise<ServiceReturnType>;
}
