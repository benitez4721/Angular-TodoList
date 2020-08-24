import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})

export class TeamService {
  
  constructor(private http: HttpClient) { 
    
  }

  get token(){
    return localStorage.getItem('token')
  }

  getTeams(){
    let headers = {
      'x-token' : this.token
    }
    return this.http.get(`${base_url}/teams`, {headers})
  }

  createTeam(team){
    let headers = {
      'x-token' : this.token
    }
    return this.http.post(`${base_url}/teams`, team, {headers})
  }

  addMember(code) {
    let headers = {
      'x-token' : this.token
    }
    return this.http.post(`${base_url}/teams/add`,{code},{headers})
  }
  
}
