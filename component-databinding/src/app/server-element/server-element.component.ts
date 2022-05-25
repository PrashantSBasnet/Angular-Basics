import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked  {

  @Input('srvElement')  element: { type: string; name: string; content: string; } |any ;
  constructor() {
    console.log('constructor called');
   }

   //implementing OnChanges is a good practise!
   ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);

   }


  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');

  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');

  }

  ngAfterViewInit(){
    console.log('ngAfterContentChecked called');

  }

  ngAfterViewChecked(){
    console.log('ngAfterContentChecked called');

  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }




}
