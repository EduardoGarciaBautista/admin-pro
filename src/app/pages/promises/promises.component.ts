import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
/*    const promise = new Promise((resolve, reject) => {
      resolve('HOLA P');
    });

    promise.then(r => {
      console.log('FIN', r)
    }).catch(e => {
      console.log('Erro', e)
    });
    console.log('INIT')*/
    this.getUsers().then(r => {
      console.log(r);
    });
  }

  getUsers() {
    return  new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
        .then( res => res.json())
        .then(body => {
          resolve(body.data);
        })
    });
  }

}
