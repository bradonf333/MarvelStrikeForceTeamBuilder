import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCharactersComponent } from './view-characters/view-characters.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'create-character', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'view-character', component: ViewCharactersComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
