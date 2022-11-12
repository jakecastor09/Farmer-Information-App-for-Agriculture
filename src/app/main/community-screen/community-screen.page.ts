import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityPost } from './community-post.model';
import { CommunityService } from './community.service';

@Component({
  selector: 'app-community-screen',
  templateUrl: './community-screen.page.html',
  styleUrls: ['./community-screen.page.scss'],
})
export class CommunityScreenPage implements OnInit {
  allPosts;
  constructor(
    private router: Router,
    private communitySrvc: CommunityService
  ) {}

  ngOnInit() {
    this.allPosts = this.communitySrvc.fethPosts();
  }
  ionViewDidEnter() {
    this.allPosts = this.communitySrvc.fethPosts();
  }
  ionViewWillEnter() {
    this.allPosts = this.communitySrvc.fethPosts();
  }

  onClickAddBtn() {
    this.allPosts = this.communitySrvc.fethPosts();
    this.router.navigateByUrl('/main/tabs/community/add');
  }

  doRefresh(event) {
    setTimeout(() => {
      this.allPosts = this.communitySrvc.fethPosts();

      event.target.complete();
    }, 2000);
  }
}
