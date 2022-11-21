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
    comment: Array<object>,
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

  updatePost(documentId: string, image: Array<string>, message: string) {
    let oldPost;
    this._allPost.subscribe((post) =>
      post.map((item) => {
        if (item.key === documentId) {
          oldPost = item;
          console.log(oldPost);
        }
      })
    );

    const updatedPost = new CommunityPost(
      oldPost.key,
      oldPost.postId,
      message,
      image,
      oldPost.comment,
      oldPost.userId,
      oldPost.fullName,
      oldPost.date,
      oldPost.userImg
    );

    return this.http
      .put(
        `https://agri-app-96063-default-rtdb.firebaseio.com/community-post/${documentId}.json`,
        { ...updatedPost }
      )
      .subscribe();
  }

  addComments(
    documentId: string,
    fullName: string,
    comment: string,
    userImg: string,
    userId: string
  ) {
    let oldPost;
    this._allPost.subscribe((post) =>
      post.map((item) => {
        if (item.key === documentId) {
          oldPost = item;
          console.log(oldPost);
        }
      })
    );
    const id = Math.random() * 1000 + Date.now() + Math.random() * 1000 + '';
    let commentData;
    if (oldPost?.comment?.length >= 1) {
      commentData = [
        ...oldPost.comment,
        { id, userId, fullName, comment, userImg },
      ];
    } else {
      commentData = [{ id, userId, fullName, comment, userImg }];
    }

    const updatedPost = new CommunityPost(
      oldPost.key,
      oldPost.postId,
      oldPost.message,
      oldPost.image,
      commentData,
      oldPost.userId,
      oldPost.fullName,
      oldPost.date,
      oldPost.userImg
    );

    return this.http
      .put(
        `https://agri-app-96063-default-rtdb.firebaseio.com/community-post/${documentId}.json`,
        { ...updatedPost }
      )
      .pipe(
        switchMap((responseData) => this._allPost),
        take(1),
        tap((post) => this._allPost.next(post))
      );
  }

  deleteComment(documentId: string, commentId: string) {
    let oldPost;
    this._allPost.subscribe((post) =>
      post.map((item) => {
        if (item.key === documentId) {
          oldPost = item;
        }
      })
    );

    console.log(documentId);

    console.log(commentId);

    const updatedComment = oldPost.comment.filter(
      (item) => item.id !== commentId
    );

    console.log(updatedComment);

    const updatedPost = new CommunityPost(
      oldPost.key,
      oldPost.postId,
      oldPost.message,
      oldPost.image,
      [...updatedComment],
      oldPost.userId,
      oldPost.fullName,
      oldPost.date,
      oldPost.userImg
    );
    return this.http
      .put(
        `https://agri-app-96063-default-rtdb.firebaseio.com/community-post/${documentId}.json`,
        { ...updatedPost }
      )
      .pipe(
        switchMap((responseData) => this._allPost),
        take(1),
        tap((post) => this._allPost.next(post))
      );
  }
}
