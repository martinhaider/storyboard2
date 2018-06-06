import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgDragDropModule } from 'ng-drag-drop';
import { TaskService } from './services/task.service';
import { ColumnService } from './services/column.service';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { ColumnModalComponent } from './column-modal/column-modal.component';
import { ColumnComponent } from './column/column.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDrU6Zmw2l2PiY-5OqjjAuGsBoApl_cCDo',
  authDomain: 'storyboard-b8cd3.firebaseapp.com',
  databaseURL: 'https://storyboard-b8cd3.firebaseio.com',
  projectId: 'storyboard-b8cd3',
  storageBucket: 'storyboard-b8cd3.appspot.com',
  messagingSenderId: '894520621886'
}

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskModalComponent,
    ColumnModalComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    FormsModule,
    ToastrModule.forRoot(),
    NgDragDropModule.forRoot(),
  ],
  providers: [
    TaskService,
    ColumnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
