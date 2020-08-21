import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';

import { Task } from '../../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css',
              '../styles-shared.css']
})
export class ListsComponent implements OnInit, AfterViewChecked{

  nuevaTarea: string = ""
  completedTasks: number = 0
  tasks: Task[] = [];
  color = 'red'
  loading: boolean = false
  @ViewChild('second_container') second_container: ElementRef
  constructor(private task_s: TaskService) { }

  ngOnInit(): void {

    this.task_s.getTasks().subscribe( (resp:any) => {
      this.tasks = resp.tasks;
      
    })
  }

  ngAfterViewChecked(): void {
    
    
    if(this.tasks.length > 4){
      let second_container: HTMLElement = this.second_container.nativeElement
      let heigth_container = second_container.scrollHeight

      second_container.scrollTop = heigth_container
    }
    
  }

  // get completedTasks(){
    
  //   return this.tasks.filter( task => task.completed).length
    
  // }

  onSubmit(){
    this.loading = true

    if (this.nuevaTarea.length > 0) {
      let task: Task = {
        name: this.nuevaTarea,
      }

      this.task_s.createTask(task).subscribe( (resp:any) => {
        
        this.tasks.push(resp.tarea)
        this.nuevaTarea = ""  
        
        this.loading = false
      })

    }
    
  }

  updateName(task: Task){
    this.task_s.editTasks(task).subscribe()
    
  }

  checked(box, task: Task){
    
    task.completed = box.checked
    this.task_s.editTasks(task).subscribe()
    box.checked ? this.completedTasks++ : this.completedTasks--
    
  }


  deleteTask(index,task:Task){
    this.tasks.splice(index,1)
    task.completed ? this.completedTasks-- : false 
    if(this.tasks.length < 5){
      this.second_container.nativeElement.scrollTop = 0
    }
    this.task_s.deleteTask(task._id).subscribe()
    
  }
  
}
