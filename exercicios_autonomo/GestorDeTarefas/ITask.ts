import Category from "./Category";

export default interface ITask {
  id: number;
  title: string;
  completed: boolean;
  completeDate?: Date;
  category: Category;
}
