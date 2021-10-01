import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent implements OnInit {


  public progress = 10;
  public progres2 = 20;

  constructor() {
  }

  ngOnInit(): void {
  }



}
