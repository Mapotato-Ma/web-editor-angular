import { Component, Input } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import { squareStyle } from 'app/common/common-api/square-style';
import { commonStyle } from 'app/common/services/common.service';

@Component({
  selector: 'app-component-square',
  templateUrl: './component-square.component.html',
  styleUrls: ['./component-square.component.scss'],
})
export class ComponentSquareComponent {
  @Input() commonStyle!: commonStyle;
  @Input() style!: unknown;

  squareStyle: SafeStyle = {};

  ngOnInit() {
    console.log('%c✨✨commonStyle✨✨', 'font-size: 24px', commonStyle);
    this.squareStyle = {
      'width.px': this.commonStyle.width,
      'height.px': this.commonStyle.height,
      'top.px': this.commonStyle.top,
      'left.px': this.commonStyle.left,
      border: `${(this.style as squareStyle).borderWidth}px solid #ccc`,
    };
  }
}
