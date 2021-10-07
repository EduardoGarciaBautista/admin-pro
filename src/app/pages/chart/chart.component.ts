import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styles: []
})
export class ChartComponent implements OnInit {

  public labelsSalesChart = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public labelsTimeChart = ['Day', 'Month', 'Year'];
  public labelsRangeChart = ['Day', 'Month', 'Years'];
  public labelsAChart = ['A', 'B', 'C'];
  public data = [[350, 450, 100]];


  constructor() {
  }

  ngOnInit(): void {
  }

}
