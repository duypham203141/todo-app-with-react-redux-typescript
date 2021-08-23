export interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
  deadline?: string;
}
export interface IStore {
  todoList: ITodo[];
  filter: EStatus;
  todoListFilter: ITodo[];
  success: string;
  loading: string;
}
export enum EStatus {
  all,
  active,
  complete,
}
