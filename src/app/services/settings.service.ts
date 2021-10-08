import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() {
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

    this.setCheck(theme);
    localStorage.setItem('theme', theme);
  }

  setCheck(theme: string) {
    const clearElements = document.querySelectorAll('.selector');
    clearElements.forEach(el => {
      el.classList.remove('working');
    });
    const element = document.querySelector(`[data-theme="${theme}"]`);
    if (element) {
      element.classList.add('working');
    }
  }
}
