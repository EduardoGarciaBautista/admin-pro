import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.changeTheme(theme);
    }
  }

  changeTheme(theme: string) {
    const linkTheme = document.querySelector('#theme');
    const url = `./assets/css/colors/${theme}.css`;
    if (linkTheme) {
      linkTheme.setAttribute('href',  url);
    }

    localStorage.setItem('theme', theme);
  }
}
