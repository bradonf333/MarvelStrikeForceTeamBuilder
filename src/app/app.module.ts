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
/* My Components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { ViewCharactersComponent } from './view-characters/view-characters.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';

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
    CharacterEditComponent
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
