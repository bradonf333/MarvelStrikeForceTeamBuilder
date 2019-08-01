import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/entities/User';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  user: User;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userData'));
  }
}
