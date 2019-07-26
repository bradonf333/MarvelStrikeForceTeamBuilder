import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
// import { User } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          // localStorage.setItem('user', JSON.stringify(user));
          // logged in, get custom user from Firestore
          console.log(user);
          return this.userService.get(user.uid).valueChanges();
        } else {
          console.log('User not signed in');
          // logged out, null
          return of(null);
        }
      })
    );
  }

  get isLoggedIn(): boolean {
    // let isLoggedIn = false;

    return true;
  }

  async emailLogin(email: string, password: string) {
    const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    if (Boolean(result)) {
      this.user$ = this.userService.get(result.user.uid).valueChanges();
    } else {
      console.log('Fail');
    }
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
