import { NgModule } from '@angular/core';
/* FireStore */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
/* Bootstrap */
import { IconsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
/* Misc */
import { environment } from 'src/environments/environment';
import { LoginComponent } from './account/login/login.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { RegisterComponent } from './account/register/register.component';
/* My Components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCharactersComponent } from './characters/all-characters/all-characters.component';
import { CharacterEditComponent } from './characters/character-edit/character-edit.component';
import { ViewCharactersComponent } from './characters/view-characters/view-characters.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { CharacterAddComponent } from './characters/character-add/character-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeComponent,
    ViewCharactersComponent,
    LoginComponent,
    RegisterComponent,
    MyAccountComponent,
    AllCharactersComponent,
    CharacterEditComponent,
    CharacterAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    IconsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
