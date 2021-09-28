import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-page-found',
  templateUrl: './np-page-found.component.html',
  styleUrls: [
    './no-page-found.component.css'
  ]
})
export class NpPageFoundComponent implements OnInit {

  public year = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
