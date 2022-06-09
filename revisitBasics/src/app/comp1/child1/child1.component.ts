import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { InteractService } from 'src/app/shared/interact.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private interactService: InteractService) { }

  @Input() fetchedData:string ='';

  ngOnInit(): void {
    this.interactService.data$.subscribe(
      ()=>this.fetchedData="I'm from service"
    )
  }

  @Output() greetEvent = new EventEmitter<string>();
  name='I m from child'



  callParentGreet():void{
    this.greetEvent.emit(this.name);
  }



}
