import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { MainService } from '../../main.service';
import { User } from '../../user.model';
import { CommunityPost } from '../community-post.model';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {
  post;
  user: User;
  inputComment;
  postId;
  showComments = false;

  constructor(
    private location: Location,
    private communityService: CommunityService,
    private route: ActivatedRoute,
    private mainService: MainService,
    private authService: AuthPageService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.route.params.subscribe((paramMap) => {
      this.postId = paramMap.commentId;
      this.communityService.getAllPost().subscribe((allPost) => {
        this.post = allPost.filter((post) => post.postId === this.postId)[0];
      });

      this.mainService.fetchUsers().subscribe((data) => {
        this.user = data.filter(
          (user) => this.authService.userLoginLocalId === user.userId
        )[0];
      });
    });
  }
  backBtnHandler() {
    // '/main/tabs/farming-method'
    this.location.back();
  }
  submitCommentClickHandler() {
    const userInputComment = this.inputComment;
    this.inputComment = '';
    const fullName =
      this.user.firstName.charAt(0).toUpperCase() +
      this.user.firstName.slice(1) +
      ' ' +
      this.user.lastName.charAt(0).toUpperCase() +
      this.user.lastName.slice(1);

    this.communityService
      .addComments(
        this.post.key,
        fullName,
        userInputComment,
        this.user.imgUrl,
        this.user.userId
      )
      .subscribe((data) => {
        console.log(data);
        this.communityService.fethPosts().subscribe(() => {
          this.communityService
            .getAllPost()
            .subscribe(
              (allPost) =>
                (this.post = allPost.filter(
                  (post) => post.postId === this.postId
                )[0])
            );
        });
      });
  }
  handleRefresh(event) {
    this.communityService.fethPosts().subscribe(() => {
      this.communityService.getAllPost().subscribe((allPost) => {
        this.post = allPost.filter((post) => post.postId === this.postId)[0];
        event.target.complete();
      });
    });
  }
  showCommentsClickHandler() {
    this.showComments = !this.showComments;
  }
  async deleteComment(commentId: string) {
    const alert = this.alertCtrl.create({
      header: 'Delete',
      message: 'Are you sure you want to remove this comment?',
      buttons: [
        {
          text: 'No',
          handler: () => {},
        },
        {
          text: 'Yes',
          handler: () => {
            this.communityService
              .deleteComment(this.post.key, commentId)
              .subscribe(() => {
                this.communityService.fethPosts().subscribe(() => {
                  this.communityService
                    .getAllPost()
                    .subscribe(
                      (allPost) =>
                        (this.post = allPost.filter(
                          (post) => post.postId === this.postId
                        )[0])
                    );
                });
              });
          },
        },
      ],
    });
    (await alert).present();
  }
}
