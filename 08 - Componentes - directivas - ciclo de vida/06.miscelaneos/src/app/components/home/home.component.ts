import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  
    <hr>
  
    <app-css></app-css>
    <p>
      Hola mundo desde app-component
    </p>
  
    <hr>
    
    <app-clases></app-clases>
  
    <br><br>
    <hr>
  
    <p [appResaltado] = " 'orange' ">
      Hola Mundo
    </p>
  
    <hr>
    
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
