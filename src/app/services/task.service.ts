import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Task} from '../task/task.model';

@Injectable()
export class TaskService {

  constructor(private db: AngularFirestore) { }

  taskCollection: AngularFirestoreCollection<Task> = this.db.collection('tasks');

  getTasks(){
    return this.taskCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Task;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  updateTask(id: string, columnID: number){
    this.taskCollection.doc(id).update({ columnID: columnID });
  }


  deleteTask(id: string){
    this.taskCollection.doc(id).delete();
  }

}
