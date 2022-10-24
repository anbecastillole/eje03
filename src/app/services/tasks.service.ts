import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: string[] = [];
  private tasksComplete: string[] = []; 
  constructor() {
  
   }

  public getTasks(): string[] { //metodos con minuscula al inicio y lo demás mayuscula
    return this.tasks;
  }

  public addTask(task:string){
    console.log("se recibe el:"+task);
    this.tasks.push(task);
    console.log(this.tasks);
   
  }

  public removeTask(pos:number){
    this.tasks.splice(pos,1);
  }

  public getCompletedTasks(): string[] {
    return this.tasksComplete;
  }

  public addCompletedTask(taskComplete:string){
    this.tasksComplete.push(taskComplete);
    console.log(this.tasksComplete);
  }

  public removeCompletedTask(pos:number){
    this.tasksComplete.splice(pos,1);
  }
}
