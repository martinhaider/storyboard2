import { Component } from '@angular/core';
import {DropEvent} from 'ng-drag-drop';
import {Task} from './task/task.model';
import { Column } from './column/column.model';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {TaskService} from './services/task.service';
import {ColumnService} from './services/column.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  columns: Column[] = [];

  constructor(private taskService: TaskService, private columnService: ColumnService){ }

  ngOnInit() {
    this.columnService.getColumns().subscribe((columns: Column[]) => this.columns = columns.sort(function(a, b){return a.columnID - b.columnID}));
  }


  number(i: number){
    console.log(i);
  }

  updateColumn(id: string, title: string){

  }

  printArray(){
    console.log(this.columns[1]);
    /*
    for(var i = 0; i < this.columns.length; i++){
      console.log(this.columns[i]);
    }
    */
  }

}
