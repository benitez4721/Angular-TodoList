import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  get token(){
    return localStorage.getItem('token')
  }

  createTask(name){
    const headers = {
      'x-token': this.token
    }
    return this.http.post(`${base_url}/tasks`,name,{headers})
  }

  getTasks(){
    const headers = {
      'x-token': this.token
    }
    return this.http.get(`${base_url}/tasks`,{headers})
  }

  editTasks(task){
    const headers = {
      'x-token': this.token
    }
    return this.http.put(`${base_url}/tasks`,task,{headers})
  }

  deleteTask(id){
    
    const headers = {
      'x-token': this.token
    } 
    return this.http.delete(`${base_url}/tasks/${id}`,{headers})
  }

}
