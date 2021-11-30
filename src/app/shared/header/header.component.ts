import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor(public uService: UserService) {
  }

  ngOnInit(): void {
  }
}
