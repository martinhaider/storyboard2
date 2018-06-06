export class Task {
  id: string;
  title: string;
  description: string;
  estimate: number;
  assignee: string;
  columnID: number;

  constructor(id: string, title: string, description: string, estimate: number, assignee: string, columnID: number){
    this.id = id;
    this.title = title;
    this.description = description;
    this.estimate = estimate;
    this.assignee = assignee;
    this.columnID = columnID;
  }
}
