import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterEntity } from '../../models/entities/CharacterEntity';
import { CharacterService } from '../../services/character-service/character.service';

@Component({
  selector: 'app-view-characters',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.scss']
})
export class CharactersViewComponent implements OnInit {
  characters$: Observable<CharacterEntity[]>;

  constructor(private characterService: CharacterService) {
    this.characters$ = characterService.list();
  }

  ngOnInit() {}
}
