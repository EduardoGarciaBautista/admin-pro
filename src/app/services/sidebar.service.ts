import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      options: [
        {
          title: 'Main',
          path: '/'
        },
        {
          title: 'Progress Bar',
          path: 'progress'
        },
        {
          title: 'Charts',
          path: 'chart'
        },
      ]
    }
  ];

  constructor() {
  }
}
