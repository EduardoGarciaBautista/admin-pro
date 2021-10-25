import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public title = '';
  private breadCrumbsSubscription: Subscription | undefined;

  constructor(private router: Router) {
    this.getRouteData();
  }

  ngOnInit(): void {
  }

  private getRouteData() {
    this.breadCrumbsSubscription = this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd && event.snapshot.firstChild === null),
        map((event: any) => event.snapshot.data),
      )
      .subscribe(({title}) => {
        this.title = title;
      });
  }

  ngOnDestroy(): void {
    if (this.breadCrumbsSubscription) {
      this.breadCrumbsSubscription.unsubscribe();
    }
  }

}
