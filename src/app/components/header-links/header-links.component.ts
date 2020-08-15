import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header-links',
  templateUrl: './header-links.component.html',
  styleUrls: ['./header-links.component.css']
})
export class HeaderLinksComponent implements OnInit {

  routeActive: string;
  constructor(private router: Router) { 
    
    this.getUrl().subscribe(route => this.routeActive = route)
    
  }
  
  ngOnInit(): void {
  }

  navigate(route: string){
    
    this.router.navigateByUrl(`/dashboard/${route}`)
  }

  getUrl(){
    return this.router.events.pipe(
      filter( event => event instanceof NavigationEnd),
      map( (event:NavigationEnd) => event.url),
    )
  }
}
