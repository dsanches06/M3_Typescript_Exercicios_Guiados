import { UserClass } from "models/user/UserClass";
import { Comment } from "./../models/comment/Comment";
import { BugTask } from "models/tasks/BugTask";

export class CommentService {
  private users: UserClass[];
  private tasks: BugTask[];
  private comments: Comment[];

  constructor(users: UserClass[], tasks: BugTask[]) {
    this.users = users;
    this.tasks = tasks;
    this.comments = [];
  }

  addComment(taskId: number, userId: number, message: string) {
    this.comments.push(new Comment(taskId, userId, message));
  }

  getComments(taskId: number) {
    return this.comments.filter((c) => c.getTaskId() === taskId);
  }

  deleteComment(commentId: number) {
    const commentIndex = this.comments.findIndex(
      (c) => c.getId() === commentId,
    );
    if (commentIndex !== -1) this.comments.splice(commentIndex, 1);
  }
}
