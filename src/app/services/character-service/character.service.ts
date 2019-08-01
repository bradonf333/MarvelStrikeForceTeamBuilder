import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from 'src/app/app.config';
import { CharacterEntity } from 'src/app/models/entities/CharacterEntity';
import { User } from 'src/app/models/entities/User';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  userCharacterCollection: AngularFirestoreCollection<CharacterEntity>;
  currentUser: User;
  uid: string;
  characters$: Observable<CharacterEntity[]>;

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
    this.userCharacterCollection = this.afs
      .collection(config.user_collection)
      .doc<User>(this.currentUser.uid)
      .collection<CharacterEntity>(config.character_collection);
  }

  list(): Observable<CharacterEntity[]> {
    console.log('[CharacterService] list');
    return this.userCharacterCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          console.log(data);
          return data;
        });
      })
    );
  }

  get(id: string): Observable<CharacterEntity> {
    console.log('[CharacterService] get id ', id);
    return this.userCharacterCollection
      .doc<CharacterEntity>(id)
      .snapshotChanges()
      .pipe(
        map(action => {
          if (action.payload.exists) {
            const data = action.payload.data();
            const payloadId = action.payload.id;
            return { payloadId, ...data };
          }
        })
      );
  }
}
