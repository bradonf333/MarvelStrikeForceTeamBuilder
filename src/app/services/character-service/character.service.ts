import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { config } from '../../app.config';
import { CharacterEntity } from '../../models/entities/CharacterEntity';
import { BaseService } from '../base-service/base.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends BaseService<CharacterEntity> {
  constructor(afs: AngularFirestore) {
    const path = config.base_character_collection;
    super(path, afs);
  }
}
