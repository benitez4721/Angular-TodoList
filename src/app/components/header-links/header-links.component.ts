import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-links',
  templateUrl: './header-links.component.html',
  styleUrls: ['./header-links.component.css']
})
export class HeaderLinksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route: string){
    this.router.navigateByUrl(route)
  }
}
