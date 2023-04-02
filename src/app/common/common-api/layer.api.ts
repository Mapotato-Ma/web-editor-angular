/**
 * @namespace LAYER
 * @description 图层命名空间，内部有关于图层的各种接口
 */
export namespace LAYER {
  /**
   * @enum layerType
   * @description 图层类型
   */
  export enum layerType {
    矩形 = '矩形',
  }

  export interface commonStyle {
    width: number;
    height: number;
    top: number;
    left: number;
  }

  /**
   * @type layer
   * @description 图层基本属性
   */
  export type layer = {
    id: string;
    layerType: layerType;
    name: string;
    commonStyle: commonStyle;
    style: unknown;
  };

  /**
   * @type layerList
   * @description 图层列表
   */
  export type layerList = layer[];
}
