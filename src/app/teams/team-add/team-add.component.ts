import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'angular-bootstrap-md';
import { BaseCharacterService } from 'src/app/services/base-character-service/base-character.service';
import { CharacterService } from 'src/app/services/character-service/character.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.scss']
})
export class TeamAddComponent implements OnInit {
  newTeamForm: FormGroup;

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
    this.newTeamForm = this.fb.group({
      teamName: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      arenaMode: [''],
      blitzMode: [''],
      raidMode: ['']
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
}
