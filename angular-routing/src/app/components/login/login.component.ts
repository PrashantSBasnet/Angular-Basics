import { HttpClient } from '@angular/common/http';
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

  faLock = faLock;

  //creating reactive from with email and password
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private auth: AuthService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {  //redirecting user back to admin page if already logged in as admin
      this.router.navigate(['admin']);
    }
  }

  //implementing onSubmit function
  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      const token = btoa(`${username}:${password}`);
      this.httpClient.get<any>('http://localhost:8080/authenticate', { headers: { 'Authorization': 'Basic ' + token } }).subscribe(
        result => {
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('userInfo', JSON.stringify(result));
          if (result?.roles?.includes('ADMIN')) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/user']);
          }
        },
        err => {
          alert(err.message);
        }
      );
    }
  }
}
