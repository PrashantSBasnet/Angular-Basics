import { Component, OnInit, EventEmitter,Output, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  val:string[]=[];

  name:string="John Doe";

  @Input() message:string='';

  allowNewServer:boolean=false;
  lengthCondition:boolean=false;

  username:string= "value"

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true
    },5000)
   }



  ngOnInit(): void {
  }

  greet(name:string){
   this.message=name;
  }

  populate(){
      this.val.push('Server added!');
      this.lengthCondition=true;
  }



  }


