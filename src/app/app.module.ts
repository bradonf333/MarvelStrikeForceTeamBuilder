import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
/* Bootstrap */
import { IconsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewCharactersComponent } from './view-characters/view-characters.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, WelcomeComponent, ViewCharactersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    IconsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
