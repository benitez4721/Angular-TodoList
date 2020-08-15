import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class TeamService {

  teams: string[] = []
  constructor() { }
}
