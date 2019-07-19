import { Component, OnInit } from '@angular/core';
import { RedRank } from './models/ranks/RedRank';
import { YellowRank } from './models/ranks/YellowRank';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MarvelStrikeForceTeamBuilder';

  ngOnInit() {
    const rank: YellowRank = new YellowRank(5, 30);
    console.log('Rank:', rank);
    const red: RedRank = new RedRank(6, rank);
    console.log('Rank:', red);
  }
}
