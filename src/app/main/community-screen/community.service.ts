/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { CommunityPost } from './community-post.model';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  private _allPost = new BehaviorSubject<CommunityPost[]>([]);
  constructor(private http: HttpClient) {}

  addPost(
    message: string,
    image: Array<string>,
    comment: Array<string>,
    userId: string,
    fullName: string,
    date: Date,
    userImg: string
  ) {
    const key = '';
    const generatedId =
      Math.random() * 1000 + Date.now() + Math.random() * 1000 + '';
    const newPost = new CommunityPost(
      key,
      generatedId,
      message,
      image,
      comment,
      userId,
      fullName,
      date,
      userImg
    );
    return this.http
      .post(
        'https://agri-app-96063-default-rtdb.firebaseio.com/community-post.json',
        { ...newPost, key: null }
      )
      .pipe(
        switchMap((responseData) => this._allPost),
        take(1),
        tap((allpost) => {
          this._allPost.next(allpost.concat(newPost));
        })
      );
  }

  getAllPost() {
    return this._allPost.asObservable();
  }

  fethPosts() {
    return this.http
      .get(
        'https://agri-app-96063-default-rtdb.firebaseio.com/community-post.json'
      )
      .pipe(
        map((responseData) => {
          const posts = [];

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              posts.push(
                new CommunityPost(
                  key,
                  responseData[key].postId,
                  responseData[key].message,
                  responseData[key].image,
                  responseData[key].comment,
                  responseData[key].userId,
                  responseData[key].fullName,
                  responseData[key].date,
                  responseData[key].userImg
                )
              );
            }
          }
          return posts;
        }),
        tap((post) => {
          this._allPost.next(post);
        })
      );
  }

  deletePost(documentId: string) {
    return this.http
      .delete(
        `https://agri-app-96063-default-rtdb.firebaseio.com/community-post/${documentId}.json`
      )
      .pipe(
        switchMap((responseData) => this._allPost),
        take(1),
        tap((post) => {
          this._allPost.next(post.filter((item) => item.key !== documentId));
        })
      );
  }
}
