import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Task} from '../task/task.model';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  taskCollection: AngularFirestoreCollection<Task> = this.db.collection('tasks');

  createTask(title: string, description: string, estimate: number, assignee: string): void{
    this.taskCollection.add({id: '', title: title, description: description, estimate: estimate, assignee: assignee, columnID: 1 });
  }

  ngOnInit() {
  }
}
