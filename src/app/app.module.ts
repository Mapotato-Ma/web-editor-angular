import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainLeftComponent } from './main/main-left/main-left.component';
import { MainRightComponent } from './main/main-right/main-right.component';
import { ComponentSquareComponent } from './main/components/component-square/component-square.component';
import { DragComponent } from './common/components/drag/drag.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainLeftComponent,
    MainRightComponent,
    ComponentSquareComponent,
    DragComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
