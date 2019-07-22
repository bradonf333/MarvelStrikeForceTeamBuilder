import { Component, OnInit } from '@angular/core';
import { BaseCharacterService } from '../services/base-character-service/base-character.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private baseCharService: BaseCharacterService) {}

  ngOnInit() {}

  seedCharacters() {
    // this.baseCharService.add();
  }
}
