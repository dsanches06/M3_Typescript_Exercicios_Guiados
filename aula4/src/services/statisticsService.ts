import { ITask } from "models/tasks/ITask";
import { TaskStatus } from "models/tasks/TaskStatus";
import { UserClass } from "models/user/UserClass";

export class StatisticsService {
  private users: UserClass[];
  private tasks: ITask[];

  constructor(users: UserClass[], tasks: ITask[]) {
    this.users = users;
    this.tasks = tasks;
  }

  countUsers(): number {
    return this.users.length;
  }

  countTasks(): number {
    return this.tasks.length;
  }

  countCompletedTasks(): number {
    return this.tasks.filter((task) => task.completed).length;
  }

  countActiveTasks(): number {
    return this.tasks.filter((task) => !task.completed).length;
  }

  tasksByStatus(status: TaskStatus): number {
    return this.tasks.filter((task) => task.status === status).length;
  }
}
