export class DragService {

  startOffset: number[] = [0, 0];

  domDrag(event: DragEvent, dom: HTMLElement) {
    dom.style['top'] = `${event.y - this.startOffset[0]}px`;
    dom.style['left'] = `${event.x - this.startOffset[1]}px`;
  }
  dragend(event: DragEvent, dom: HTMLElement) {
    dom.style['top'] = `${event.y - this.startOffset[0]}px`;
    dom.style['left'] = `${event.x - this.startOffset[1]}px`;
  }

  dragstart(event: DragEvent, dom: HTMLElement) {
    this.startOffset[0] = event.offsetY;
    this.startOffset[1] = event.offsetX;
  }
}

export const drag = new DragService();
