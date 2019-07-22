import { Component, OnInit } from '@angular/core';
import { CharacterEntity } from '../models/entities/CharacterEntity';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-view-characters',
  templateUrl: './view-characters.component.html',
  styleUrls: ['./view-characters.component.scss']
})
export class ViewCharactersComponent implements OnInit {
  totalCount = 0;
  characterList: CharacterEntity[];
  // chars$: Observable<CharacterEntity[]>;
  constructor(private charService: CharacterService) {
    charService.list().subscribe(data => {
      this.totalCount = data.length;
      this.characterList = data;
    });
    // this.chars$ = this.charService.list();
  }

  ngOnInit() {}
}
