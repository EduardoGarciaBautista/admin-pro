import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";
import {map, take, filter} from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  private obsSubscription: Subscription;

  constructor() {

    /*this.obsSubscription = this.getObservable().pipe(retry(1)).subscribe({
      next: value => {
        console.log(value);
      },
      complete: () => {
        console.log('COMPLETED')
      },
      error: err => {
        console.log(err);
      }
    });*/
    this.obsSubscription = this.returnInterval()
      .subscribe(console.log)
  }

  getObservable() {
    return new Observable<number>(observer => {
      let i = 0;
      const interval = setInterval(() => {
        observer.next(i);
        i++;
        if (i === 4) {
          observer.complete();
        }
        if (i === 2) {
          i = 0;
          observer.error('error');
        }
      }, 1000);
    });
  }

  returnInterval(): Observable<number>  {
    return interval(200)
      .pipe(
        take(10),
        map(r => r + 1),
        filter(r => (r % 2 === 0)),
      );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.obsSubscription.unsubscribe();
  }
}
