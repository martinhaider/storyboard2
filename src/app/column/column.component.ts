import { Component, OnInit, Input } from '@angular/core';
import {Column} from './column.model';
import {Task} from '../task/task.model';
import {TaskService} from '../services/task.service';
import {DropEvent} from 'ng-drag-drop';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @Input() column: Column;
  @Input() i: number;

  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks: Task[]) => this.tasks = tasks);
  }

  onListDrop(e: DropEvent, columnID: number) {
    columnID += 1;
    this.taskService.updateTask(e.dragData.id, columnID);
  }

  filterItemsOfId(id: number){
    id += 1;
    return this.tasks.filter(x => x.columnID === id);
  }

}
