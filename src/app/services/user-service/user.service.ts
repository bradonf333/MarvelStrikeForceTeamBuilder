import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { config } from 'src/app/app.config';
import { User } from 'src/app/models/entities/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected collection: AngularFirestoreCollection<User>;

  constructor(afs: AngularFirestore) {
    const path = config.user_collection;
    this.collection = afs.collection(path);
  }

  get uid(): string {
    const user: User = JSON.parse(localStorage.getItem('userData'));
    return user.uid;
  }

  get(id: string): AngularFirestoreDocument<User> {
    console.log('[UserService] get: ', id);
    return this.collection.doc<User>(id);
  }

  add(user: User): Promise<User> {
    const subject = new Subject<User>();

    console.log('[BaseService] adding: ', user);
    const newUser: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    };

    this.collection
      .doc(newUser.uid)
      .set(newUser)
      .then(ref => {
        const newItem = {
          ...(newUser as any) /* workaround until spreads work with generic types */
        };
        subject.next(newItem);
      });

    return subject.asObservable().toPromise();
  }
}
