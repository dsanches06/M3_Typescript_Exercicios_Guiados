import { Priority } from "./../../utils/priority";
import { UserClass } from "models/user/UserClass";
import { ITask } from "./ITask";
import { TaskStatus } from "./TaskStatus";
import { DeadLine } from "models/deadLine/DeadLine";
import { Attachment } from "models/attachment/Attachment";

export class BugTask implements ITask {
  id: number;
  title: string;
  completed: boolean;
  status: TaskStatus;
  private users: UserClass[];
  private taskPriority: Priority;
  private tags: string[];
  private deadLine: DeadLine;
  private comments: Comment[];
  private attachements: Attachment[];

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.completed = false;
    this.status = TaskStatus.CREATED;
    this.users = [];
    this.taskPriority = Priority.LOW;
    this.tags = [];
    this.deadLine = new DeadLine(new Date());
    this.comments = [];
    this.attachements = [];
  }

  getUsersFromTask(): UserClass[] {
    return this.users;
  }

  removeUserFromTask(userId: number): void {
    const userIndex = this.users.findIndex((u) => u.getId() === userId);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  }

  getTags(): string[] {
    return this.tags;
  }

  removeTag(tag: string): void {
    const tagIndex = this.tags.indexOf(tag);
    if (tagIndex !== -1) {
      this.tags.splice(tagIndex, 1);
    }
  }

  getPriority(): Priority {
    return this.taskPriority;
  }

  setPriority(priority: Priority): void {
    this.taskPriority = priority;
  }

  getTaskDeadLine() {
    return this.deadLine;
  }

  setDeadLine(date: Date): void {
    this.deadLine.setDeadLineDate(date);
  }

  getComments(): Comment[] {
    return this.comments;
  }

  getAttachments(): Attachment[] {
    return this.attachements;
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
