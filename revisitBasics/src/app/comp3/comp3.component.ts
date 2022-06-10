import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  gender=['male', 'female']
  signupForm:FormGroup|any;
  forbiddenValues= ['Dinesh', 'Ramesh']

  constructor() { }

  //creating the form programatically
  ngOnInit(): void {//before the template is rendered lifecycle hook
    this.signupForm= new FormGroup({
      'username': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, [Validators.required, Validators.email]),
      //this.forbiddenValidator gives error because at this point the function is unknown. So, binding is must!!
      'qans': new FormControl(null),
      'validator': new FormControl(null, [Validators.required, <any>this.forbiddenValidator.bind(this)]), //custom validation
      'gender': new FormControl('male'),

      //creating nested FormGroup
      'userData': new FormGroup({
        'value1': new FormControl(null, Validators.required),
         'value2' : new FormControl(null)
      }),

      //creating FormArray
      'hobbies': new FormArray([])

    });
  }

  onSubmit(){
    console.log(this.signupForm);

  }

  //creating array of controls
  addHobby(){
      const control = new FormControl(null, Validators.required);  //creating array of controls
      (<FormArray>this.signupForm.get('hobbies')).push(control);  //adding in array of controls
  }


  //validator                             //key          value  pair
  forbiddenValidator(control:FormControl):{[s:string ] : boolean  }|any
  {
    if(this.forbiddenValues.indexOf(control.value)!=-1) {
      return { 'valueisForbidden':true };
    }
    return null;
  }
}
