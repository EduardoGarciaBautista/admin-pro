import {Component, Input, OnInit} from '@angular/core';
import {Color, Label, MultiDataSet} from "ng2-charts";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: []
})
export class DonutComponent implements OnInit {

  @Input() title = '';

  @Input() labels: Label[] = [];

  @Input() data: MultiDataSet = [];

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [{
    backgroundColor: ['#9E120E', '#FF5800', '#FFB414']
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
