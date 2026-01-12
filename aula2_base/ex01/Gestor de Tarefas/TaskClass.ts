import ITask from "./ITask";
import Category from "./Category.js";

export default class TaskClass implements ITask {
  id: number;
  title: string;
  completed: boolean;
  completeDate?: Date;
  category: Category;

  constructor(id: number, title: string, category: Category) {
    this.id = id;
    this.title = title;
    this.completed = false;
    this.category = category;
  }

  markCompleted(): void {
    this.completed = true;
    this.completeDate = new Date();
  }
}
