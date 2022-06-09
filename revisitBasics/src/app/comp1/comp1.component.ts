import { Component, OnInit, EventEmitter,Output, Input } from '@angular/core';
import { RevisitService } from '../revisit.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  name:string="John Doe";

  @Input() message:string='';

  allowNewServer:boolean=false;

  username:string= "value"

  constructor(private revisit:RevisitService) {
    setTimeout(()=>{
      this.allowNewServer=true
    },5000)
   }



  ngOnInit(): void {
  }

  greet(name:string){
   this.message=name;
  }

}
