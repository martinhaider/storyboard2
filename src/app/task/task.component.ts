import { Component, Input, OnInit} from '@angular/core';
import { Task } from './task.model';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

declare var $: any;

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  taskCollection: AngularFirestoreCollection<Task> = this.db.collection('tasks')

  constructor(private db: AngularFirestore) {
  }

  deleteTask(id: string){
    this.taskCollection.doc(id).delete();
  }

  ngOnInit() {
  }

}
