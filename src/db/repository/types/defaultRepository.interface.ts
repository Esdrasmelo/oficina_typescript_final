export interface IDefaultRepository<RepositoryType, DataType> {
  getAll: () => Promise<RepositoryType[]>;
  create: (data: DataType) => Promise<RepositoryType>;
  update: (id: number, data: Partial<DataType>) => Promise<RepositoryType>;
  delete: (id: number) => Promise<RepositoryType>;
}
