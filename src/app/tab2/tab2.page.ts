import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public tasksComplete: string[];
  public taskComplete: string;
  
  constructor(private taskService:TasksService) {
    this.tasksComplete= this.taskService.getCompletedTasks();
    
  } 
  public removeCompletedTask(pos:number){
    //se agrega al otro
    this.taskComplete= this.tasksComplete[pos];
    this.taskService.addTask(this.taskComplete);
    console.log("se agrega:"+this.taskComplete);;
    //se elimina de este
    this.taskService.removeCompletedTask(pos);
    this.tasksComplete = this.taskService.getCompletedTasks();
  }

}
