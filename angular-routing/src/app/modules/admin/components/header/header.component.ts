import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //injecting AuthService for logout
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  //creating logout function
  logout(): void {
    this.auth.logout();

  }

}
