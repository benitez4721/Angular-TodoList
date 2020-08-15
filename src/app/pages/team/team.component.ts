import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreateTeamModalComponent } from '../../components/create-team-modal/create-team-modal.component';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css',
              '../styles-shared.css']
})
export class TeamComponent implements OnInit {

  teams:string[] = []
  constructor(public dialog: MatDialog, public teams_s: TeamService) {
    this.teams = this.teams_s.teams
    
  }

  ngOnInit(): void {
    
  }

  get teamsEmpty(){
    return this.teams.length === 0
  }

  createTeam(){
    let dialogRef = this.dialog.open(CreateTeamModalComponent,{
      width: '500px',
      data: { title: "Create a team",
              content: "You can create a team and then share a code with your team members, split your work sharing tasks with your team",
              label_input: "Team name",
              button_text: "Create team"
            }
    })

    dialogRef.afterClosed().subscribe( result => {
      if(result && result.length > 0){
        this.teams_s.teams.push(result)
        
      }
    })
  }

  joinTeam(){
    let dialogRef = this.dialog.open(CreateTeamModalComponent,{
      width: '500px',
      data: { title: "Join team",
              content: "Ask the group leader for the team code, and place it here to join the team",
              label_input: "Team code",
              button_text: "Join team"
            }
    })
  }

}
