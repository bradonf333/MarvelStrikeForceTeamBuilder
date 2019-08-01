import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../services/character-service/character.service';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.scss']
})
export class CharacterEditComponent implements OnInit {
  // Routing
  id: string;
  private sub: any;
  editCharacterForm: FormGroup;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private charService: CharacterService
  ) {}

  ngOnInit() {
    this.sub = this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');

      this.editCharacterForm = this.fb.group({
        abilities: ['', [Validators.required]],
        level: ['', [Validators.minLength(2), Validators.maxLength(30)]],
        power: ['', [Validators.required, Validators.minLength(6)]],
        redStars: ['', [Validators.required]],
        yellowStars: ['', [Validators.required]]
      });
    });

    /*
     * If valid then get all the information for that object.
     * If undefined, then re-route to home page.
     */
    if (this.id === null) {
      // If undefined, then re-route because it is an error.
      // TODO: Create an error page/component.
      this.router.navigate(['']);
    } else {
    }
  }

  get abilities() {
    return this.editCharacterForm.get('abilities');
  }
  get level() {
    return this.editCharacterForm.get('level');
  }
  get power() {
    return this.editCharacterForm.get('power');
  }
  get redStars() {
    return this.editCharacterForm.get('redStars');
  }
  get yellowStars() {
    return this.editCharacterForm.get('yellowStars');
  }
}
