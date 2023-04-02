import { Component, OnInit } from '@angular/core';
import { LAYER } from 'app/common/common-api/layer.api';
import { commonStyle } from 'app/common/services/common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  componentLayerType = LAYER.layerType;

  layerList: LAYER.layerList = [
    {
      id: '1561515151',
      name: '矩形',
      layerType: this.componentLayerType.矩形,
      commonStyle: new commonStyle({ width: 100, height: 50, top: 500, left: 500 }),
      style: {
        borderWidth: 20,
      },
    },
  ];

  ngOnInit(): void {}
}
