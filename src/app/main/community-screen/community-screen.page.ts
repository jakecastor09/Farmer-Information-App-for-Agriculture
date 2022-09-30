import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-screen',
  templateUrl: './community-screen.page.html',
  styleUrls: ['./community-screen.page.scss'],
})
export class CommunityScreenPage implements OnInit {
  firstName;
  lastName;
  postsLength;
  posts;
  constructor(private router: Router) {}

  async ngOnInit() {
    // await this.getPosts();
    // await this.getFarmer();
  }
  ionViewWillEnter() {
    // this.getPosts();
    // this.getFarmer();
  }
  ionViewWillLeave() {
    // this.getPosts();
    // this.getFarmer();
  }

  onClickAddBtn() {
    this.router.navigateByUrl('/main/tabs/community/add');
  }
}
