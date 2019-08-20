import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from 'src/app/app.config';
import { TeamEntity } from 'src/app/models/entities/Team';
import { User } from 'src/app/models/entities/User';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  userTeamsCollection: AngularFirestoreCollection<TeamEntity>;
  currentUser: User;
  uid: string;

  teamIds: string[] = [];

  constructor(private afs: AngularFirestore) {
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
    this.userTeamsCollection = this.afs.collection(config.team_collection, ref =>
      ref.where('userId', '==', this.currentUser.uid)
    );
  }

  list(): Observable<TeamEntity[]> {
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
}
