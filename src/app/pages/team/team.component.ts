import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreateTeamModalComponent } from '../../components/create-team-modal/create-team-modal.component';
import { TeamService } from '../../services/team.service';
import { Team } from '../../../models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css',
              '../styles-shared.css']
})
export class TeamComponent implements OnInit {

  teams: any[] = []
  loading_teams = true
  constructor(public dialog: MatDialog, public teams_s: TeamService) {
    
  }

  ngOnInit(): void {
    this.teams_s.getTeams().subscribe( (resp:any) =>{ 
      this.teams = resp.teams
      this.loading_teams = false
    })

  }

  get teamsEmpty(){
    return this.teams.length === 0
  }

  createTeam(){
    let dialogRef = this.dialog.open(CreateTeamModalComponent,{
      width: '500px',
      data: { id: 'create',
              title: "Create a team",
              content: "You can create a team and then share a code with your team members, split your work sharing tasks with your team",
              label_input: "Team name",
              button_text: "Create team"
            }
    })
    dialogRef.afterClosed().subscribe( resp => {
      if(resp){

        this.teams.push(resp)
      }
      
    })

  }  
          

  joinTeam(){
    let dialogRef = this.dialog.open(CreateTeamModalComponent,{
      width: '500px',
      data: { id: 'join',
              title: "Join team",
              content: "Ask the group leader for the team code, and place it here to join the team",
              label_input: "Team code",
              button_text: "Join team"
            }
    })
    dialogRef.afterClosed().subscribe( resp => {
      if(resp){
        this.teams.push(resp)
      }
    })
  }

}
