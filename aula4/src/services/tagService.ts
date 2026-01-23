import { BugTask } from "models/tasks/BugTask";
import { ITask } from "models/tasks/ITask";

export class TagService {
    
  //- Uma task pode ter várias tags
  private tasks: ITask[];

  constructor(tasks: ITask[]) {
    this.tasks = tasks;
  }

  addTag(taskId: number, tag: string) {
    const task: BugTask = this.tasks.find((t) => t.id === taskId) as BugTask;
    if (task) {
      task.addTag(tag);
    }
  }

  removeTag(taskId: number, tag: string) {
    const task: BugTask = this.tasks.find((t) => t.id === taskId) as BugTask;
    if (task) {
      task.removeTag(tag);
    }
  }

  getTags(taskId: number) {
    const task: BugTask = this.tasks.find((t) => t.id === taskId) as BugTask;
    return task.getTags();
  }

  getTasksByTag(tag: string) {
    return this.tasks.filter(
      (task) => task instanceof BugTask && task.getTags().includes(tag),
    );
  }
}
