import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { Observable } from 'rxjs';
import { CharacterEntity } from 'src/app/models/entities/CharacterEntity';
import { TeamEntity } from 'src/app/models/entities/Team';
import { CharacterService } from 'src/app/services/character-service/character.service';
import { TeamService } from 'src/app/services/teams/team.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.scss']
})
export class TeamAddComponent implements OnInit {
  newTeamForm: FormGroup;
  newTeam: TeamEntity;
  characters$: Observable<CharacterEntity[]>;
  availableCharacters: CharacterEntity[];
  uid: string;

  @ViewChild('confirmationModal', { static: false }) public confirmation: ModalDirective;

  public showConfirmation(): void {
    this.confirmation.show();
  }

  constructor(
    private characterService: CharacterService,
    private fb: FormBuilder,
    private teamService: TeamService,
    private userService: UserService
  ) {
    // characterService.list().subscribe();
    characterService.list().subscribe((characters: CharacterEntity[]) => {
      this.availableCharacters = characters;
    });
    teamService.list().subscribe();
    this.uid = this.userService.uid;
  }

  ngOnInit() {
    this.newTeamForm = this.fb.group({
      teamName: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      arenaMode: [''],
      blitzMode: [''],
      raidMode: [''],
      slot1: [''],
      slot2: [''],
      slot3: [''],
      slot4: [''],
      slot5: ['']
    });

    this.slot1.setValue('Pick A Toon');
  }

  onSubmit() {
    this.newTeam = {
      name: this.teamName.value,
      userId: this.uid,
      gameModes: this.getGameModes(),
      character1: this.slot1.value,
      character2: this.slot2.value,
      character3: this.slot3.value,
      character4: this.slot4.value,
      character5: this.slot5.value
    };

    this.showConfirmation();
  }

  getGameModes(): string[] {
    const gameModes: string[] = [];

    if (this.blitzMode.value === true) {
      gameModes.push('Blitz');
    }
    if (this.arenaMode.value === true) {
      gameModes.push('Arena');
    }
    if (this.raidMode.value === true) {
      gameModes.push('Raid');
    }

    return gameModes;
  }

  onYesClick() {
    console.log('Adding New Team: ', this.teamName.value);
    this.teamService.add(this.newTeam).then(res => {});
    this.confirmation.hide();
  }

  onNoClick() {
    this.confirmation.hide();
  }

  updateAvailableChars(slotControl: AbstractControl) {
    /*
    TODO:
      This finds the toons index and removes it from the available characters.
      However, that also removes it from the entire list so it can no longer be an option,
      even though they currently just selected it. Maybe need to create seperate arrays.
    */
    console.log(slotControl.value);
    const toon = this.availableCharacters.find(i => i.id === slotControl.value);
    const index = this.availableCharacters.findIndex(i => i.id === slotControl.value);
    this.availableCharacters.splice(index, 1);
    console.log('Toon', toon);
    console.log('Index', index);
    console.log(this.availableCharacters);
  }

  get teamName() {
    return this.newTeamForm.get('teamName');
  }
  get arenaMode() {
    return this.newTeamForm.get('arenaMode');
  }
  get blitzMode() {
    return this.newTeamForm.get('blitzMode');
  }
  get raidMode() {
    return this.newTeamForm.get('raidMode');
  }
  get slot1() {
    return this.newTeamForm.get('slot1');
  }
  get slot2() {
    return this.newTeamForm.get('slot2');
  }
  get slot3() {
    return this.newTeamForm.get('slot3');
  }
  get slot4() {
    return this.newTeamForm.get('slot4');
  }
  get slot5() {
    return this.newTeamForm.get('slot5');
  }
}
