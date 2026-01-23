import { ITask } from "models/tasks/ITask";
import { BugTask } from "models/tasks/BugTask";

export class DeadlineService {
  //- Associar uma data limite a cada task
  private tasks: ITask[];

  constructor(tasks: ITask[]) {
    this.tasks = tasks;
  }

  setDeadline(taskId: number, date: Date) {
    const task = this.tasks.find((t) => t.id === taskId) as BugTask;
    if (task) {
      task.setDeadLine(date);
    }
  }

  isExpired(taskId: number) {
    const task = this.tasks.find((t) => t.id === taskId) as BugTask;
    if (task) {
      return task.getTaskDeadLine().isExpired();
    }
    return false;
  }

  getExpiredTasks() {
    return this.tasks.filter((task) => this.isExpired(task.id));
  }
}
