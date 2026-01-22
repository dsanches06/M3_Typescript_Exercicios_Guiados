import { ITask } from "./ITask";
import { TaskStatus } from "./TaskStatus";

export class BugTask implements ITask {
  id: number;
  title: string;
  completed: boolean;
  status: TaskStatus;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.completed = false;
    this.status = TaskStatus.CREATED;
  }

  getType(): string {
    return "Bug";
  }

  moveTo(status: TaskStatus): void {
    // - definir transições válidas
    const validTransitions: Record<TaskStatus, TaskStatus[]> = {
      [TaskStatus.CREATED]: [TaskStatus.ASSIGNED],
      [TaskStatus.ASSIGNED]: [TaskStatus.IN_PROGRESS, TaskStatus.BLOCKED],
      [TaskStatus.IN_PROGRESS]: [TaskStatus.BLOCKED, TaskStatus.COMPLETED],
      [TaskStatus.BLOCKED]: [TaskStatus.ASSIGNED, TaskStatus.COMPLETED],
      [TaskStatus.COMPLETED]: [TaskStatus.ARCHIVED],
      [TaskStatus.ARCHIVED]: [],
    };
    // - validar transição
    if (validTransitions[this.status]?.includes(status)) {
      // - atualizar estado
      this.status = status;
      // - marcar completed se necessário
      if (this.status === TaskStatus.COMPLETED) {
        this.completed = true;
      }
    }
  }
}
