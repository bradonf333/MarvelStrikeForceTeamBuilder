import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { Observable } from 'rxjs';
import { CharacterEntity } from 'src/app/models/entities/CharacterEntity';
import { Team } from 'src/app/models/entities/Team';
import { CharacterService } from 'src/app/services/character-service/character.service';
import { TeamService } from 'src/app/services/team/team.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.scss']
})
export class TeamAddComponent implements OnInit {
  newTeamForm: FormGroup;
  newTeam: Team;
  characters$: Observable<CharacterEntity[]>;
  usersCharacters: CharacterEntity[];
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
      this.usersCharacters = characters;
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
  }

  onSubmit() {
    // TODO: Need to validate if this works.
    this.newTeam = Object.assign({}, new Team());
    this.newTeam.name = this.teamName.value;
    this.newTeam.userId = this.uid;
    this.newTeam.gameModes = this.getGameModes();
    // TODO: Prevent Duplicate Toons.
    this.newTeam.character1 = this.usersCharacters.find(x => x.id === this.slot1.value);
    this.newTeam.character2 = this.usersCharacters.find(x => x.id === this.slot2.value);
    this.newTeam.character3 = this.usersCharacters.find(x => x.id === this.slot3.value);
    this.newTeam.character4 = this.usersCharacters.find(x => x.id === this.slot4.value);
    this.newTeam.character5 = this.usersCharacters.find(x => x.id === this.slot5.value);
    this.newTeam.calculatePower();

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
