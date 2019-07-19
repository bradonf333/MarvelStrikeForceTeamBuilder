import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterEntity } from './models/entities/CharacterEntity';
import { RedRank } from './models/ranks/RedRank';
import { YellowRank } from './models/ranks/YellowRank';
import { BaseCharacterService } from './services/base-character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MarvelStrikeForceTeamBuilder';
  chars$: Observable<CharacterEntity[]>;

  /**
   *
   */
  constructor(private baseCharService: BaseCharacterService) {}

  ngOnInit() {
    this.chars$ = this.baseCharService.list();
    // console.log();
    const rank: YellowRank = new YellowRank(5, 30);
    console.log('Rank:', rank);
    const red: RedRank = new RedRank(6, rank);
    console.log('Rank:', red);
  }
}
