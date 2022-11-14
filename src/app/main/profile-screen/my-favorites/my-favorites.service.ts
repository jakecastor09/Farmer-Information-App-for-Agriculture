/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Favorites } from './my-favorites.model';

@Injectable({
  providedIn: 'root',
})
export class MyFavoritesService {
  _favorites = new BehaviorSubject<Favorites[]>([]);

  constructor(private http: HttpClient) {}

  addFavorite(farmingMethodId: string, userId: string) {
    console.log('addFavorites');
    const key = '';
    const generatedId =
      Math.random() * 1000 + Date.now() + Math.random() * 1000 + '';

    const newFavorite = new Favorites(
      key,
      generatedId,
      farmingMethodId,
      userId
    );
    return this.http
      .post(
        'https://agri-app-96063-default-rtdb.firebaseio.com/favorites.json',
        { ...newFavorite, key: null }
      )
      .pipe(
        switchMap((reponseData) => this._favorites),
        take(1),
        tap((favorite) => {
          this._favorites.next(favorite.concat(newFavorite));
        })
      );
  }

  fetchFavorites() {
    return this.http
      .get('https://agri-app-96063-default-rtdb.firebaseio.com/favorites.json')
      .pipe(
        map((responseData) => {
          const favorites = [];

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              favorites.push(
                new Favorites(
                  key,
                  responseData[key].id,
                  responseData[key].farmingMethodId,
                  responseData[key].userId
                )
              );
            }
          }
          return favorites;
        }),
        tap((favorite) => {
          this._favorites.next(favorite);
        })
      );
  }

  deleteFavorites(documentId: string) {
    return this.http
      .delete(
        `https://agri-app-96063-default-rtdb.firebaseio.com/favorites/${documentId}.json`
      )
      .pipe(
        switchMap((reponseData) => this._favorites),
        take(1),
        tap((favorite) => {
          this._favorites.next(
            favorite.filter((item) => item.key !== documentId)
          );
        })
      );
  }
}
