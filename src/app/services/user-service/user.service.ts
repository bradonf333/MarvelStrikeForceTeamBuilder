import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
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

  get(id: string): AngularFirestoreDocument<User> {
    console.log('[BaseService] get: ', id);
    return this.collection.doc<User>(id);
  }
}
