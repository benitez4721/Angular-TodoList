import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  loadAPI: Promise<any>
  constructor() { }

  ngOnInit(): void {
    this.loadAPI = new Promise((resolve) => {
      console.log('resolving promise...');
      this.loadScript();
  });
  }

  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = '../../assets/js/nav.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
}

}
