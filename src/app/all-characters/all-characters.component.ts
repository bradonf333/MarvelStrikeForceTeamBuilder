import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterEntity } from '../models/entities/CharacterEntity';
import { AuthService } from '../services/auth-service/auth.service';
import { BaseCharacterService } from '../services/base-character-service/base-character.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss']
})
export class AllCharactersComponent implements OnInit {
  characters$: Observable<CharacterEntity[]>;

  constructor(
    private baseCharacterService: BaseCharacterService,
    public authService: AuthService
  ) {
    this.characters$ = baseCharacterService.list();
  }

  ngOnInit(): void {}
}
