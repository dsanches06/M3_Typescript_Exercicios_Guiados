export class BaseEntity {
  protected id: number;
  protected createdAt: Date;

  constructor(id: number) {
    this.id = id;
    this.createdAt = new Date();
  }
}
