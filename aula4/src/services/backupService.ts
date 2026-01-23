import { BugTask } from "models/tasks/BugTask";
import { UserClass } from "models/user/UserClass";

//- Exportar dados em objetos JSON

export class BackupService {
  private users: UserClass[];
  private tasks: BugTask[];

  constructor(users: UserClass[], tasks: BugTask[]) {
    this.users = users;
    this.tasks = tasks;
  }

  exportUsers() {}
  exportTasks() {}
  exportAssignments() {}
  exportAll() {}
}
