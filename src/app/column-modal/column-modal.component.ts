import { Component } from '@angular/core';


@Component({
  selector: 'app-column-modal',
  templateUrl: './column-modal.component.html',
  styleUrls: ['./column-modal.component.css']
})

export class ColumnModalComponent {

  constructor() { }

  createColumn(title: string){
    console.log("create column");
    //this.postcreatecolumnService.postcreatecolumn(title);
  }
}
