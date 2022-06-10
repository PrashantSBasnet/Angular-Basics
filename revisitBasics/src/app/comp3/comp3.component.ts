import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
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
      'lastname': new FormControl(null, Validators.required, this.forbiddenLast),
      //this.forbiddenValidator gives error because at this point the function is unknown to angular. So, binding is must!!
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

    //whenever we type any input, console output changes..
    //to observe closely what happens in the individual form

    this.signupForm.valueChanges.subscribe(
      (value: any) => console.log(value)
    );

    this.signupForm.statusChanges.subscribe(
      (status:any)=> console.log(status)
    );

    // this.signupForm.setValue({
    //   'username':'Sample'
    //    fill the remaining values.....
    // })

    //patch value is for certain part of the form
  
    this.signupForm.patchValue({
      'username':'Malika'
    })
  }

  onSubmit(){
    console.log(this.signupForm);

  }

  //creating array of controls
  addHobby(){
      const control = new FormControl(null, Validators.required);  //creating array of controls
      (<FormArray>this.signupForm.get('hobbies')).push(control);  //adding in array of controls
  }


  //validator                                //key        value
  forbiddenValidator(control:FormControl):{[s:string ] : boolean  }|any
  {
    if(this.forbiddenValues.indexOf(control.value)!=-1) { //-1 is returned when the value is not the part of the array
      return { 'valueisForbidden':true };
    }
    return null; //Angular rule: nothing is passed when validation is correct
  }


  forbiddenLast(control:AbstractControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if (control.value === 'test'){
            resolve ({'lastNameisForbidden':true});
        }
        else{
          resolve(null)
        }
      }, 1500);
    });
    return promise;
  }
}
