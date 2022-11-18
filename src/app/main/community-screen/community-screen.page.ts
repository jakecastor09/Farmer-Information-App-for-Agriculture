import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { MainService } from '../main.service';
import { User } from '../user.model';
import { CommunityPost } from './community-post.model';
import { CommunityService } from './community.service';

@Component({
  selector: 'app-community-screen',
  templateUrl: './community-screen.page.html',
  styleUrls: ['./community-screen.page.scss'],
})
export class CommunityScreenPage implements OnInit {
  allPosts;
  user: User;
  showMore = false;
  userPostId: string;
  constructor(
    private router: Router,
    private communitySrvc: CommunityService,
    private mainService: MainService,
    private authService: AuthPageService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.communitySrvc.fethPosts().subscribe((data) => (this.allPosts = data));
    this.user = this.mainService.getCurrentUser(
      this.authService.userLoginLocalId
    );
  }

  ionViewWillEnter() {
    this.communitySrvc.fethPosts().subscribe((data) => (this.allPosts = data));

    this.user = this.mainService.getCurrentUser(
      this.authService.userLoginLocalId
    );
  }

  onClickAddBtn() {
    this.communitySrvc.fethPosts().subscribe((data) => (this.allPosts = data));

    this.router.navigateByUrl('/main/tabs/community/add');
  }

  doRefresh(event) {
    setTimeout(() => {
      this.communitySrvc
        .fethPosts()
        .subscribe((data) => (this.allPosts = data));

      event.target.complete();
    }, 2000);
  }
  dropdownClickHandler(postId: string) {
    this.showMore = !this.showMore;
    this.userPostId = postId;
  }

  async deletePostClickHandler(postId: string) {
    const loading = await this.loadingCtrl.create({
      message: 'Deleting post...',
    });
    loading.present();

    const postToDelete = this.allPosts.filter(
      (post) => post.postId === postId
    )[0];

    this.communitySrvc.deletePost(postToDelete.key).subscribe(async () => {
      this.communitySrvc.fethPosts().subscribe((data) => {
        this.allPosts = data;
        loading.dismiss();
      });
    });
  }

  editPostClickHandler(postId: string) {
    this.router.navigateByUrl('/main/tabs/community/edit/' + postId);
  }
  commentsClickHandler(postId: string) {
    this.router.navigateByUrl('/main/tabs/community/comments/' + postId);
  }
}
