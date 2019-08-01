import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { RegisterComponent } from './account/register/register.component';
import { AllCharactersComponent } from './characters/all-characters/all-characters.component';
import { CharacterEditComponent } from './characters/character-edit/character-edit.component';
import { ViewCharactersComponent } from './characters/view-characters/view-characters.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'my-account', component: MyAccountComponent, pathMatch: 'full' },
  { path: 'create-character', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'all-characters', component: AllCharactersComponent, pathMatch: 'full' },
  { path: 'view-characters', component: ViewCharactersComponent, pathMatch: 'full' },
  { path: 'character-edit/:id', component: CharacterEditComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
