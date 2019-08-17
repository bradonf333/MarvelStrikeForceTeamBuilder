import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { RegisterComponent } from './account/register/register.component';
import { AllCharactersComponent } from './characters/all-characters/all-characters.component';
import { CharacterAddComponent } from './characters/character-add/character-add.component';
import { CharacterEditComponent } from './characters/character-edit/character-edit.component';
import { CharactersViewComponent } from './characters/characters-view/characters-view.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { TeamAddComponent } from './teams/team-add/team-add.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'my-account', component: MyAccountComponent, pathMatch: 'full' },
  { path: 'create-character', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'all-characters', component: AllCharactersComponent, pathMatch: 'full' },
  { path: 'characters-view', component: CharactersViewComponent, pathMatch: 'full' },
  { path: 'character-edit/:id', component: CharacterEditComponent, pathMatch: 'full' },
  { path: 'character-add/:id', component: CharacterAddComponent, pathMatch: 'full' },
  { path: 'team-add', component: TeamAddComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
