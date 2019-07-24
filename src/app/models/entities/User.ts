import { BaseEntity } from './BaseEntity';

export interface User extends BaseEntity {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  somethingCustom?: string;
}
