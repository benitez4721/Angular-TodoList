import { Component, OnInit, ViewChild, ElementRef,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-team-modal',
  templateUrl: './create-team-modal.component.html',
  styleUrls: ['./create-team-modal.component.css']
})
export class CreateTeamModalComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef
  loading: boolean = false
  teamName: string = ""
  constructor(public dialogRef: MatDialogRef<CreateTeamModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  get emptyString(){
    return this.teamName.length === 0
  }

  onSubmit(){
    this.loading = true
    this.nameInput.nativeElement.blur()
    
    setTimeout( () => {
      this.dialogRef.close(this.teamName)
      this.loading = false
    },500)   
  }
}
