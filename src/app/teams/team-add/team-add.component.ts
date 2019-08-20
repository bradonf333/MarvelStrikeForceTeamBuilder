import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { Observable } from 'rxjs';
import { CharacterEntity } from 'src/app/models/entities/CharacterEntity';
import { CharacterService } from 'src/app/services/character-service/character.service';
import { TeamService } from 'src/app/services/teams/team.service';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.scss']
})
export class TeamAddComponent implements OnInit {
  newTeamForm: FormGroup;
  characters$: Observable<CharacterEntity[]>;
  availableCharacters: CharacterEntity[];

  @ViewChild('confirmationModal', { static: false }) public confirmation: ModalDirective;

  public showConfirmation(): void {
    this.confirmation.show();
  }

  constructor(
    private characterService: CharacterService,
    private fb: FormBuilder,
    private teamService: TeamService
  ) {
    characterService.list().subscribe();
    teamService.list().subscribe();
    // EXAMPLE: characterService.list().subscribe((characters: CharacterEntity[]) => {this.availableCharacters = characters;});
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

  onSubmit() {}

  onYesClick() {}

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
