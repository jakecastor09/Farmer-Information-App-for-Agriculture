import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommunityPost } from './community-post.model';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  allPost: CommunityPost[];
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
    const generatedId =
      Math.random() * 1000 + Date.now() + Math.random() * 1000 + '';
    const newPost = new CommunityPost(
      generatedId,
      message,
      image,
      comment,
      userId,
      fullName,
      date,
      userImg
    );
    this.http
      .post(
        'https://agri-app-96063-default-rtdb.firebaseio.com/community-post.json',
        { ...newPost, id: null }
      )
      .subscribe();
  }

  getAllPost() {
    return this.allPost;
  }

  fethPosts() {
    const posts = [];
    this.http
      .get(
        'https://agri-app-96063-default-rtdb.firebaseio.com/community-post.json'
      )
      .subscribe((responseData) => {
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            posts.push(
              new CommunityPost(
                key,
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
        this.allPost = [...posts];
      });

    return posts;
  }
}
