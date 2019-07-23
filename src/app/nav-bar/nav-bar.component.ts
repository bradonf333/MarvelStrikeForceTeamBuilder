import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/AuthService/auth.service';
import { BaseCharacters } from '../services/base-character-service/base-character-seed';
import { BaseCharacterService } from '../services/base-character-service/base-character.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  baseCharacters = new BaseCharacters();
  constructor(
    private baseCharService: BaseCharacterService,
    public authService: AuthService
  ) {}

  ngOnInit() {}

  seedCharacters() {
    this.baseCharService.add(
      this.baseCharacters.baseCharacters.find(x => x.name === 'Punisher')
    );
  }
}
