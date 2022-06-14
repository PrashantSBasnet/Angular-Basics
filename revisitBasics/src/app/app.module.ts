
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { NgModule } from '@angular/core';
import { Child1Component } from './comp1/child1/child1.component';
import { Comp3Component } from './comp3/comp3.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestsComponent } from './http-requests/http-requests.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Child1Component,
    Comp3Component,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HttpRequestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
