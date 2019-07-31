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
  uid: string;
  characters$: Observable<CharacterEntity[]>;

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    // authService.user$.subscribe(user => {
    //   this.uid = user.uid;
    //   this.userCharacterCollection = this.afs
    //     .collection(config.user_collection)
    //     .doc<User>(this.uid)
    //     .collection<CharacterEntity>(config.character_collection);
    // });
    this.uid = localStorage.getItem('uid');
    this.userCharacterCollection = this.afs
      .collection(config.user_collection)
      .doc<User>(this.uid)
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
}
