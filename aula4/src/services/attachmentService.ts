import { Attachment } from "models/attachment/Attachment";
import { ITask } from "models/tasks/ITask";
import { BugTask } from "models/tasks/BugTask";

export class AttachmentService {
  private tasks: ITask[];

  constructor(tasks: ITask[]) {
    this.tasks = tasks;
  }

  // Funções para gerenciar attachments relacionados a tasks
  addAttachment(taskId: number, attachment: Attachment) {
    const task = this.tasks.find((t) => t.id === taskId) as BugTask;
    if (task) {
      task.getAttachments().push(attachment);
    }
  }

  // Retorna todos os attachments de uma task específica
  getAttachments(taskId: number): Attachment[] {
    const task = this.tasks.find((t) => t.id === taskId) as BugTask;
    return task.getAttachments();
  }

  // Remove um attachment específico
  removeAttachment(attachmentId: number) {
    const attachment = this.getAttachments(attachmentId);
    if (attachment) {
      const index = attachment.findIndex((a) => a.getId() === attachmentId);
      if (index !== -1) {
        attachment.splice(index, 1);
      }
    }
  }
}
