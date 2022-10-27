import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import * as firebase from 'firebase/compat/app';
import { tap, map, switchMap, first } from 'rxjs/operators';
import { TouchSequence } from 'selenium-webdriver';
import { of } from 'rxjs';
import { AuthPageService } from './auth-page.service';

@Injectable({
  providedIn: 'root',
})
export class PresenceService {
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private authService: AuthPageService
  ) {
    this.updateOnUser().subscribe();
    this.updateOnDisconnect();
  }

  get timestamp() {
    return firebase.default.database.ServerValue.TIMESTAMP;
  }

  getPresence(uid: string) {
    return this.db.object(`status/${uid}`).valueChanges();
  }

  getAllPresence() {
    return this.db.object(`status`).valueChanges();
  }

  getUser() {
    return this.authService.userLoginLocalId;
  }

  async setPresence(status: string) {
    const user = await this.getUser();

    if (user) {
      return this.db
        .object(`status/${user}`)
        .update({ status, timestamp: this.timestamp });
    }
  }

  // Implement presence logic here

  // Updates status when logged-in connection to Firebase starts
  updateOnUser() {
    const connection = this.db
      .object('.info/connected')
      .valueChanges()
      .pipe(map((connected) => (connected ? 'online' : 'offline')));

    return this.afAuth.authState.pipe(
      switchMap((user) => (user ? connection : of('offline'))),
      tap((status) => this.setPresence('online'))
    );
  }

  updateOnDisconnect() {
    this.db
      .object(`status/${this.authService.userLoginLocalId}`)
      .query.ref.onDisconnect()
      .update({
        status: 'offline',
        timestamp: this.timestamp,
      });
  }

  async signOut() {
    await this.setPresence('offline');
    await this.afAuth.signOut();
  }
}
