import { Component } from '@angular/core';
import {DropEvent} from 'ng-drag-drop';
import {Task} from './task/task.model';
import { Column } from './column/column.model';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { of } from 'rxjs/observable/of';
import { merge } from 'rxjs/observable/merge';
import { mapTo } from 'rxjs/operators';
import {TaskService} from './services/task.service';
import {ColumnService} from './services/column.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  columns: Column[] = [];
  online$: Observable<boolean>;
  online: boolean = true;

  constructor(private taskService: TaskService, private columnService: ColumnService, public ngxSmartModalService: NgxSmartModalService){
      this.online$ = merge(
          of(navigator.onLine),
          fromEvent(window, 'online').pipe(mapTo(true)),
          fromEvent(window, 'offline').pipe(mapTo(false))
      );
  }

  ngOnInit() {
    this.columnService.getColumns().subscribe((columns: Column[]) => this.columns = columns.sort(function(a, b){return a.columnID - b.columnID}));
    this.online$.subscribe(x => this.online = x);
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

    closeModal(){
        this.ngxSmartModalService.resetModalData('columnEditModal');
        this.ngxSmartModalService.close('columnEditModal');
    }

}
