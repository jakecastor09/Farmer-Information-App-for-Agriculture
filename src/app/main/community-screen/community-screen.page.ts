import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

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
  constructor(private router: Router, private apiService: ApiService) {}

  async ngOnInit() {
    await this.getPosts();
    await this.getFarmer();
  }

  onClickAddBtn() {
    this.router.navigateByUrl('/main/tabs/community/add');
  }
  getFarmer() {
    this.apiService.getFirstName().subscribe(
      (res: any) => {
        console.log('SUCCESS ===', res);
        const responseFirstName = res[res.length - 1].firstName;
        this.firstName =
          responseFirstName.charAt(0).toUpperCase() +
          responseFirstName.slice(1);
      },

      (error: any) => {
        console.log('ERROR ===', error);
      }
    );
  }
  getPosts() {
    this.apiService.getPosts().subscribe(
      (res: any) => {
        this.posts = res;
        this.postsLength = this.posts.length;
        console.log('SUCCESS ===', res);
      },
      (error: any) => {
        console.log('ERROR ===', error);
      }
    );
  }
}
