import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //injecting AuthService for logout
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  //creating logout function
  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userInfo');
    this.router.navigate(['/login']);
  }
}
