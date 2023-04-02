import { LAYER } from '../common-api/layer.api';

export class commonStyle implements LAYER.commonStyle {
  constructor(commonStyleCustom: Partial<LAYER.commonStyle>) {
    this.width = commonStyleCustom?.width ?? 100;
    this.height = commonStyleCustom?.height ?? 100;
    this.top = commonStyleCustom?.top ?? 0;
    this.left = commonStyleCustom?.left ?? 0;
  }

  width: number;
  height: number;
  top: number;
  left: number;
}
