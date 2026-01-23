import { ITask } from "models/tasks/ITask";
import { BugTask } from "models/tasks/BugTask";
import { Priority } from "utils/priority";

export class PriorityService {
  private tasks: ITask[];
  private priority: Priority;

  constructor(tasks: ITask[], priority: Priority) {
    this.tasks = tasks;
    this.priority = priority;
  }

  setPriority(taskId: number, priority: Priority) {
    const task = this.tasks.find((t) => t.id === taskId) as BugTask;
    if (task) {
      task.setPriority(priority);
    }
  }

  getPriority(taskId: number) {
    const task = this.tasks.find((t) => t.id === taskId) as BugTask;
    if (task) {
      return task.getPriority();
    }
  }

  getHighPriorityTasks(): BugTask[] {
    return this.tasks.filter((t) => {
      const task = t as BugTask;
      return task.getPriority() === this.priority;
    }) as BugTask[];
  }
}
