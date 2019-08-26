import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from 'src/app/app.config';
import { Team } from 'src/app/models/entities/Team';
import { User } from 'src/app/models/entities/User';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  userTeamsCollection: AngularFirestoreCollection<Team>;
  currentUser: User;
  uid: string;

  teamIds: string[] = [];

  constructor(private afs: AngularFirestore) {
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
    this.userTeamsCollection = this.afs.collection(config.team_collection, ref =>
      ref.where('userId', '==', this.currentUser.uid)
    );
  }

  list(): Observable<Team[]> {
    console.log('[TeamService] list');
    return this.userTeamsCollection.snapshotChanges().pipe(
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

  add(team: Team): Promise<Team> {
    const subject = new Subject<Team>();

    console.log('[CharacterService] adding: ', team);
    this.userTeamsCollection.add(team).then(ref => {
      const newItem = {
        id: ref.id,
        ...(team as any) /* workaround until spreads work with generic types */
      };
      ref.set(newItem);
      subject.next(newItem);
    });

    return subject.asObservable().toPromise();
  }
}
