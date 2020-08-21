import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(private router: Router, public user_s: UserService) { 
    
  }

  ngOnInit(): void {
   
    
  }

  signOut(){
    this.router.navigateByUrl('/login')
  }

}
