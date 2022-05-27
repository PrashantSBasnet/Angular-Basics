import {  NgModule, OnInit, Renderer2, ElementRef} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BetterHighlightComponent } from './better-highlight/better-highlight.component';
import { BasicHighlightsComponent } from './basic-highlights/basic-highlights.component';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BetterHighlightComponent,
    BasicHighlightsComponent,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {
 constructor(){}
 }
