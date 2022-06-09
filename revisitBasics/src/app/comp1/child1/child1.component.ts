import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() greetEvent = new EventEmitter<string>();
  name='I m from child'

  callParentGreet():void{
    this.greetEvent.emit(this.name);
  }



}
