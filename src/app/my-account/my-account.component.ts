import { Component, OnInit } from '@angular/core';
import { User } from '../models/entities/User';
import { AuthService } from '../services/auth-service/auth.service';
import { CharacterService } from '../services/character-service/character.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  user: User;
  constructor(public authService: AuthService, private characterService: CharacterService) {}

  ngOnInit() {
    this.authService.user$.subscribe(data => {
      this.user = data;
    });
  }
}
