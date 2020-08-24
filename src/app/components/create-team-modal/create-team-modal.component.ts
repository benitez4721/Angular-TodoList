import { Component, OnInit, ViewChild, ElementRef,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TeamService } from '../../services/team.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-team-modal',
  templateUrl: './create-team-modal.component.html',
  styleUrls: ['./create-team-modal.component.css']
})
export class CreateTeamModalComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef
  loading: boolean = false

  teamName = new FormControl('',Validators.required)
  constructor(public dialogRef: MatDialogRef<CreateTeamModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private team_s: TeamService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loading = true
    this.nameInput.nativeElement.blur()
    if (this.data.id === "join" && this.teamName.valid) {
      if(isNaN(this.teamName.value)){
        this.teamName.setErrors({
          invalid: "The code has to be a number"
        })
        this.loading = false
        return 

      }
      this.team_s.addMember(this.teamName.value).subscribe(( resp:any) => {
        console.log(resp)
        this.dialogRef.close(resp.user_team)
      
      },
      err => {
        this.loading = false
        this.teamName.setErrors({         
          invalid: err.error.error
        })
      })
    }else{
      if(this.teamName.valid){
        this.team_s.createTeam({name: this.teamName.value}).subscribe( (resp:any) =>{ 
          console.log(resp);
          this.dialogRef.close(resp.user_team)
        })
      }
    }
    // console.log(this.teamName)
     
  }

  get inputErrors(){
    if(this.teamName.hasError('required')){
      if(this.data.id === "join"){
        return 'The team code is required'
      }else{
        return 'The team name is required'
      }
    }
    else if(this.teamName.hasError('invalid')){
      return this.teamName.errors.invalid
    }
    
  }
}
