import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'angular-bootstrap-md';
import { CharacterEntity, maxLevel } from 'src/app/models/entities/CharacterEntity';
import { Gear, maxGearTier } from 'src/app/models/entities/Gear';
import { maxRank } from 'src/app/models/ranks/YellowRank';
import { BaseCharacterService } from 'src/app/services/base-character-service/base-character.service';
import { CharacterService } from 'src/app/services/character-service/character.service';
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
  charName: string;
  // Used for the form values
  maxGearTier = maxGearTier;
  maxStarLevel = maxRank;

  @ViewChild('confirmationModal', { static: false }) public confirmation: ModalDirective;

  public showConfirmation(): void {
    this.confirmation.show();
  }

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private baseCharService: BaseCharacterService,
    private charService: CharacterService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.sub = this.actRoute.paramMap.subscribe(params => {
      this.characterId = params.get('id');
    });

    this.newCharacterForm = this.fb.group({
      level: ['', [Validators.min(2), Validators.max(maxLevel)]],
      power: ['', [Validators.required]],
      redStars: ['', [Validators.required]],
      yellowStars: ['', [Validators.required]],
      gearTier: [
        '',
        [Validators.required, Validators.min(1), Validators.max(maxGearTier)]
      ],
      gearSlot1: [''],
      gearSlot2: [''],
      gearSlot3: [''],
      gearSlot4: [''],
      gearSlot5: [''],
      gearSlot6: ['']
    });

    this.uid = this.userService.uid;

    /*
     * If valid then get all the information for that object.
     * If undefined, then re-route to home page.
     */
    if (this.characterId === null || this.characterId === 'undefined') {
      // If undefined, then re-route because it is an error.
      // TODO: Create an error page/component.
      this.router.navigate(['/welcome']);
    } else {
      this.baseCharService.get(this.characterId).subscribe(character => {
        // Load the base data for the character.
        this.newCharacter = character;
        this.charName = this.newCharacter.name;
      });
    }
  }

  doesToonExist() {
    const dup = this.charService.doesToonExist(this.charName);
    console.log('Dup', dup);
  }

  updateAbility(abilityName: string, newLevel: number) {
    this.newCharacter.abilities.find(a => a.name === abilityName).level = newLevel;
  }

  onSubmit() {
    this.newCharacter.level = this.level.value;
    this.newCharacter.power = this.power.value;
    this.newCharacter.yellowStars = this.yellowStars.value;
    this.newCharacter.redStars = this.redStars.value;
    this.newCharacter.gear = Object.assign({}, new Gear(this.gearTier.value));
    this.newCharacter.gear.slot1 =
      this.gearSlot1.value == null ? false : this.gearSlot1.value;
    this.newCharacter.gear.slot2 =
      this.gearSlot2.value == null ? false : this.gearSlot2.value;
    this.newCharacter.gear.slot3 =
      this.gearSlot3.value == null ? false : this.gearSlot3.value;
    this.newCharacter.gear.slot4 =
      this.gearSlot4.value == null ? false : this.gearSlot4.value;
    this.newCharacter.gear.slot5 =
      this.gearSlot5.value == null ? false : this.gearSlot5.value;
    this.newCharacter.gear.slot6 =
      this.gearSlot6.value == null ? false : this.gearSlot6.value;

    this.showConfirmation();
  }

  onYesClick() {
    console.log('Updated Character: ', this.newCharacter);
    const toonExists = this.charService.doesToonExist(this.newCharacter.name);
    if (!toonExists) {
      // TODO: Need some sort of confirmation, maybe ask if they want to go to characters-vew or back to all-characters.
      this.charService.add(this.newCharacter).then(res => {});
      this.confirmation.hide();
    }
  }

  onNoClick() {
    this.confirmation.hide();
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
  get gearTier() {
    return this.newCharacterForm.get('gearTier');
  }
  get gearSlot1() {
    return this.newCharacterForm.get('gearSlot1');
  }
  get gearSlot2() {
    return this.newCharacterForm.get('gearSlot2');
  }
  get gearSlot3() {
    return this.newCharacterForm.get('gearSlot3');
  }
  get gearSlot4() {
    return this.newCharacterForm.get('gearSlot4');
  }
  get gearSlot5() {
    return this.newCharacterForm.get('gearSlot5');
  }
  get gearSlot6() {
    return this.newCharacterForm.get('gearSlot6');
  }
}
