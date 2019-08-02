import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterEntity } from 'src/app/models/entities/CharacterEntity';
import { BaseCharacterService } from 'src/app/services/base-character-service/base-character.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-character-add',
  templateUrl: './character-add.component.html',
  styleUrls: ['./character-add.component.scss']
})
export class CharacterAddComponent implements OnInit {
  // Routing
  characterId: string;
  private sub: any;
  newCharacterForm: FormGroup;
  newCharacter: CharacterEntity;
  uid: string;
  numOfAbilities: number;
  maxLevel = 70;
  maxStarLevel = 7;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private baseCharService: BaseCharacterService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.sub = this.actRoute.paramMap.subscribe(params => {
      this.characterId = params.get('id');

      this.newCharacterForm = this.fb.group({
        level: ['', [Validators.min(2), Validators.max(this.maxLevel)]],
        power: ['', [Validators.required]],
        redStars: ['', [Validators.required]],
        yellowStars: ['', [Validators.required]]
      });
    });

    this.uid = this.userService.uid;

    /*
     * If valid then get all the information for that object.
     * If undefined, then re-route to home page.
     */
    if (this.characterId === null) {
      // If undefined, then re-route because it is an error.
      // TODO: Create an error page/component.
      this.router.navigate(['']);
    } else {
      this.baseCharService.get(this.characterId).subscribe(character => {
        // Load the base data for the character.
        this.newCharacter = character;
        this.numOfAbilities = this.newCharacter.abilities.length;
      });
    }
  }

  updateAbility(abilityName: string, newLevel: number) {
    this.newCharacter.abilities.find(a => a.name === abilityName).level = newLevel;
  }

  onSubmit() {
    this.newCharacter.level = this.level.value;
    this.newCharacter.power = this.power.value;
    this.newCharacter.yellowStars = this.yellowStars.value;
    this.newCharacter.redStars = this.redStars.value;
    console.log('Updated Character: ', this.newCharacter);
    // TODO: CharacterService.Add
  }

  get level() {
    return this.newCharacterForm.get('level');
  }
  get power() {
    return this.newCharacterForm.get('power');
  }
  get yellowStars() {
    return this.newCharacterForm.get('yellowStars');
  }
  get redStars() {
    return this.newCharacterForm.get('redStars');
  }
}
