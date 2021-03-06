import { Component, OnInit } from '@angular/core';
import { User } from '../../models/entities/User';
import { AuthService } from '../../services/auth-service/auth.service';
import { BaseCharacters } from '../../services/base-character-service/base-character-seed';
import { BaseCharacterService } from '../../services/base-character-service/base-character.service';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  baseCharacters = new BaseCharacters();
  currentUser: User;

  constructor(
    private baseCharService: BaseCharacterService,
    public authService: AuthService,
    public userService: UserService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
  }

  ngOnInit() {}

  seedCharacters() {
    this.baseCharService.add(
      this.baseCharacters.baseCharacters.find(x => x.name === 'Kree Cyborg')
    );
  }
}
