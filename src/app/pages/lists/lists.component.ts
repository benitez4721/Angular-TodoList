import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css',
              '../styles-shared.css']
})
export class ListsComponent implements OnInit, AfterViewChecked {

  nuevaTarea: string = ""
  completedTasks: number = 0
  tasks: Task[] = [];
  color = 'red'
  loading: boolean = false
  @ViewChild('second_container') second_container: ElementRef
  constructor() { }

  ngOnInit(): void {
   
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

    setTimeout( () => {
      this.loading = false
      if (this.nuevaTarea.length > 0) {
        let task: Task = {
          title: this.nuevaTarea,
          completed: false
        }
        this.tasks.push(task)
        this.nuevaTarea = ""  
      }
    },100)
    
    
  }

  checked(box, task: Task){
    
    task.completed = box.checked
    box.checked ? this.completedTasks++ : this.completedTasks--
    
  }


  deleteTask(index,task:Task){
    this.tasks.splice(index,1)
    task.completed ? this.completedTasks-- : false 
    if(this.tasks.length < 5){
      this.second_container.nativeElement.scrollTop = 0
    }
    
  }
  
}
