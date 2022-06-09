import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { InteractService } from '../shared/interact.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @ViewChild('f') signupForm :NgForm |any; //can be used instead of onSubmit

  @Input() value: string | undefined;

  answer:string=''
  genders =['male', 'female', 'others']


  // for setting all values
  // suggestUserName(){
  //   const suggestedName= 'Superuser';
  //   this.signupForm.setValue({
  //     userData:{
  //       username: suggestedName,
  //       lname: '',
  //       qans: "ok i got this now",
  //       gender: 'Male'
  //     },
  //   })
  // }

  //correct approach, for selected values only
  suggestUserName(){
      const suggestedName= 'Superuser';
      this.signupForm.form.patchValue({
        userData:{
          username: suggestedName
        },
      })
    }

  constructor(private interactService: InteractService) { }

  sample: string = 'I m from comp2 using service';

  ngOnInit(): void { }

  useService(sample: any) {
    this.interactService.sendData(sample);
  }

  // onSubmit(form: ElementRef | any) {
  //   console.log(form.value.fname)
  // }

  onSubmit(){}

}
