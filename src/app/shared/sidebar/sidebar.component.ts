import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../../services/sidebar.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menu: any[];

  constructor(private sideBarService: SidebarService,
              public uService: UserService) {
    this.menu = sideBarService.menu;
  }

  ngOnInit(): void {
  }

}
