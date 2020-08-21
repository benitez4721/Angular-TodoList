import { Component, OnInit } from '@angular/core';

declare function customInitFunctions()
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  loadAPI: Promise<any>
  constructor() { 
  }

  ngOnInit(): void {
    
    customInitFunctions()
  }

  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    let node = document.createElement('script');
    node.src = '../../assets/js/nav.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("nav")) {
            isFound = true;
            console.log(scripts[i]);
            
            document.getElementsByTagName('head')[0].removeChild(scripts[i])
          }
    }
        
    document.getElementsByTagName('head')[0].appendChild(node);
    
    
}

}
