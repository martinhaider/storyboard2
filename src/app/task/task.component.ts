import { Component, Input, OnInit} from '@angular/core';
import { Task } from './task.model';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {TaskService} from '../services/task.service';

declare var $: any;

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(private taskService: TaskService) {
  }

  deleteTask(id: string){
    if(confirm('Are you sure to delete this record ?') == true){
      this.taskService.deleteTask(id);
    }
  }

  ngOnInit() {
  }

}
