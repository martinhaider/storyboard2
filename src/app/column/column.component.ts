import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import {Column} from './column.model';
import {Task} from '../task/task.model';
import {TaskService} from '../services/task.service';
import {DropEvent} from 'ng-drag-drop';
import {ColumnService} from '../services/column.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @Input() column: Column;
  @Input() i: number;

  tasks: Task[] = [];
  columnCount: number;

  constructor(private taskService: TaskService, private columnService: ColumnService, private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks: Task[]) => this.tasks = tasks);
  }

  openModal(title: string, columnID: number){
    const obj: Object = {
      title: title,
        columnID: columnID
    };
    console.log(obj);
    this.ngxSmartModalService.setModalData(obj, 'columnEditModal');
    this.ngxSmartModalService.open('columnEditModal');
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
