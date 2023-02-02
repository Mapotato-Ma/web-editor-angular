import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  private fixLeft: boolean = false;
  private fixRight: boolean = false;

  style: Record<string, string> = {
    top: '0',
    left: '0',
  };

  startOffset: number[] = [0, 0];

  ngOnInit(): void {}

  dragenter(event: DragEvent) {
    event.preventDefault();
  }
  dragover(event: DragEvent) {
    event.preventDefault();
  }

  domDrag(event: DragEvent) {
    this.style['top'] = `${event.y - this.startOffset[0]}px`;
    this.style['left'] = `${event.x - this.startOffset[1]}px`;
  }
  dragend(event: DragEvent) {
    this.style['top'] = `${event.y - this.startOffset[0]}px`;
    this.style['left'] = `${event.x - this.startOffset[1]}px`;
  }

  dragstart(event: DragEvent) {
    this.startOffset[0] = event.offsetY;
    this.startOffset[1] = event.offsetX;
  }
}
