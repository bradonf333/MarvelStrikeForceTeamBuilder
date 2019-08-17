import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
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
  constructor(afs: AngularFirestore) {
    const path = config.team_collection;
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
    // TODO: Need to see if this is working at all.
    // TODO: Need to figure out the sub-query, teams > list of docs > search all the fields on these docs for userId
  }
}
