import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RegisterComponent } from './register/register.component';
import { ViewCharactersComponent } from './view-characters/view-characters.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'my-account', component: MyAccountComponent, pathMatch: 'full' },
  { path: 'create-character', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'all-characters', component: AllCharactersComponent, pathMatch: 'full' },
  { path: 'view-characters', component: ViewCharactersComponent, pathMatch: 'full' },
  { path: 'edit-character/:id', component: CharacterEditComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
