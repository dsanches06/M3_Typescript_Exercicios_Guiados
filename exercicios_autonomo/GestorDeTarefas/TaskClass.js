export default class TaskClass {
    constructor(id, title, category) {
        this.id = id;
        this.title = title;
        this.completed = false;
        this.category = category;
    }
    markCompleted() {
        this.completed = true;
        this.completeDate = new Date();
    }
}
