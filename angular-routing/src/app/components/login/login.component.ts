import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faLock= faLock;

  //creating reactive from with email and password
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()){  //redirecting user back to admin page if already logged in as admin
      this.router.navigate(['admin']);
    }
   }

  //implementing onSubmit function
  onSubmit():void{
    console.log(this.loginForm.value);
    if (this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(
        (result)=>{
          this.router.navigate(['admin']);
        },
        (err:Error)=>{
          alert(err.message);
        }
      );
    }
  }

}
