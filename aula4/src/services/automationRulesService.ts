import { TaskStatus } from "models/tasks/TaskStatus";
import { ITask } from "../models/tasks/ITask";
import { UserClass } from "../models/user/UserClass";
import { HistoryLog } from "models/logs/HistoryLog";
import { BugTask } from "models/tasks/BugTask";
import { NotificationService } from "./notificationService";

export class AutomationRulesService {
  //construtor vazio
  constructor() {}

  //- Regras de automação relacionadas a tasks
  applyRules(task: ITask) {
    if (task.status === TaskStatus.COMPLETED) {
      const log = new HistoryLog();
      log.addLog(`Task ${task.id} completed on ${Date.now()}`);
    } //
    else if (task.status === TaskStatus.BLOCKED) {
      const assignedUsers: UserClass[] = (task as BugTask).getUsersFromTask();
      const usersId: number[] = assignedUsers.map((user) => user.getId());
      const notification = new NotificationService(assignedUsers);
      notification.notifyGroup(
        usersId,
        `Task ${task.id} is blocked. Please take action.`,
      );
    }
    //- Se task expirar → mover para BLOCKED
    // if (task.dueDate && new Date(task.dueDate) < new Date()) {
    // task.status = TaskStatus.BLOCKED;
    // }
  }

  //- Se user ficar inactive → remover assignments
  applyUserRules(user: UserClass) {
    if (!user.isActive()) {
      user.getTasksFromUser().forEach((task) => {
        user.removeTask(task.id);
      });
    }
  }
}
