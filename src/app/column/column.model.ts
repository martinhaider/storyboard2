export class Column {
  id: string;
  title: string;
  columnID: number;

  constructor(id: string, title: string, columnID: number){
    this.id = id;
    this.title = title;
    this.columnID = columnID;
  }
}
