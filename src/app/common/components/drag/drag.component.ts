import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss'],
})
export class DragComponent {
  @Input() style: {
    width: number;
    height: number;
    top:number;
    left:number;
  } = {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  };
}
