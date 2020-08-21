import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../../models/user.model';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: User;
  constructor(private http: HttpClient) { 

  }

  get token(){
    return localStorage.getItem('token')
  }

  register(data) {
    return this.http.post(`${base_url}/users`,data)
  }

  login(data) {
    return this.http.post(`${base_url}/login`,data).pipe(
      map( (resp:any) =>{localStorage.setItem('token', resp.token)})
    )
  }

  validateToken(){
    const headers = {
      'x-token': this.token
    }
    return this.http.get(`${base_url}/login/renew`, {headers}).pipe(
      map( (resp:any) => {
        const {
          uid,
          nombre,
          apellido,
          email
        } = resp.user;
        
        this.user = {
          nombre,
          apellido,
          email,
          uid
        }
        localStorage.setItem('token', resp.token)
        return true     
      }),
      catchError( error => of(false))
    )
  }
}
