import { ITask } from "models/tasks/ITask";
import { UserRole } from "security/UserRole";
import { BaseEntity } from "./BaseEntity";

export class UserClass extends BaseEntity {
  private email: string;
  private active: boolean;
  private role: UserRole;
  private tasks: ITask[];
  private notifications: Notification[];

  constructor(id: number, email: string, role: UserRole) {
    super(id);
    this.email = email;
    this.active = true;
    this.role = role;
    this.tasks = [];
    this.notifications = [];
  }

  getTasksFromUser(): ITask[] {
    return this.tasks;
  }

  removeTask(taskId: number): void {
    const taskIndex = this.tasks.findIndex((t) => t.id === taskId);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }

  addNotification(notification: Notification): void {
    this.notifications.push(notification);
  }

  getNotifications(): Notification[] {
    return this.notifications;
  }


  getId(): number {
    return this.id;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  isActive(): boolean {
    return this.active;
  }

  setIsActive(active: boolean): void {
    this.active = active;
  }

  toggleActive(): void {
    // this.active = !this.active;
    this.setIsActive(!this.active);
  }

  getRole(): UserRole {
    return this.role;
  }

  setRole(role: UserRole): void {
    this.role = role;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }
}
