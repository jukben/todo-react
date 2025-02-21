export interface ITodo {
  id: number;
  name: string;
  completed: boolean;
}

export enum Filter {
  all = "all",
  active = "active",
  completed = "completed",
}
