import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
// import { User } from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from '../../models/entities/User';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  xyUser: User;
  user$: Observable<User>;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private userService: UserService
  ) {
    // this.user$ = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user) {
    //       // localStorage.setItem('user', JSON.stringify(user));
    //       return this.userService.get(user.uid).valueChanges();
    //     } else {
    //       return of(null);
    //     }
    //   })
    // );
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        const x = this.userService.get(this.user.uid).valueChanges();
        x.subscribe(xy => {
          this.xyUser = xy;
          console.log('here: ', xy);
        });
        console.log('This.User: ', this.user);
        console.log('X User: ', x);
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('xyUser', JSON.stringify(this.xyUser));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  async emailLogin(email: string, password: string) {
    const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['/']);
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  async googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData({ uid, email, displayName, photoURL }: User) {
    const userRef: AngularFirestoreDocument<User> = this.userService.get(uid);

    const data = {
      uid,
      email,
      displayName,
      photoURL
    };

    return userRef.set(data, { merge: true });
  }

  register(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          res => {
            resolve(res);
            this.router.navigate(['/']);
          },
          err => reject(err)
        );
    });
  }
}
