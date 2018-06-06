import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Column } from '../column/column.model';

@Injectable()
export class ColumnService {

  constructor(private db: AngularFirestore) { }

  columnCollection: AngularFirestoreCollection<Column> = this.db.collection('columns');

  getColumns(){
    return this.columnCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Column;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  updateColumn(id: string, title: string){
    this.columnCollection.doc(id).update({ title: title });
  }
}
