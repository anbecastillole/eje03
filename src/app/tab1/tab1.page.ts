import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public tasks: string[];
  public task: string;

  constructor(private taskService:TasksService) {
    this.tasks= this.taskService.getTasks();

  } 

  public addTask(){

    this.taskService.addTask(this.task);
    this.tasks=this.taskService.getTasks();
    console.log(this.tasks);
 
  }

  public removeTask(pos:number){
    this.taskService.removeTask(pos);
    this.tasks = this.taskService.getTasks();
  }

  public completeTask(pos:number){
    //se agrega al otro
    this.taskService.addCompletedTask(this.task);
    this.tasks = this.taskService.getTasks();
    //se elimina
    this.taskService.removeTask(pos);
    this.tasks = this.taskService.getTasks();

  }


}
