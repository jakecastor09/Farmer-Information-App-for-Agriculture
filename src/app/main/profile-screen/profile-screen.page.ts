import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { MainService } from '../main.service';
import { User } from '../user.model';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.page.html',
  styleUrls: ['./profile-screen.page.scss'],
})
export class ProfileScreenPage implements OnInit {
  user: User;
  constructor(
    private mainService: MainService,
    private router: Router,
    private authSrvc: AuthPageService
  ) {}

  ngOnInit() {
    this.mainService.fetchUsers().subscribe((users) => {
      const currentUser = users.filter(
        (user) => user.userId === this.authSrvc.userLoginLocalId
      );
      this.user = currentUser[0];
    });
  }
  ionViewWillEnter() {
    this.mainService.fetchUsers().subscribe((users) => {
      const currentUser = users.filter(
        (user) => user.userId === this.authSrvc.userLoginLocalId
      );
      this.user = currentUser[0];
    });
  }

  myMethods() {
    this.router.navigateByUrl(
      '/main/tabs/profile/my-methods/' + this.user.userId
    );
  }
}
