import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styles: []
})
export class InputNumberComponent implements OnInit {

  // Renaming input
  @Input('value') progress = 50;
  @Input() classBtn = 'btn-primary';

  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  increase() {
    if (this.progress < 100) {
      this.progress++;
      this.valueChange.emit(this.progress);
    }
  }

  decrease() {
    if (this.progress > 0) {
      this.progress--;
      this.valueChange.emit(this.progress);
    }
  }

  progressChange(value: number) {
    if (value <= 100 && value >= 0) {
      this.valueChange.emit(value);
    }
  }

}
