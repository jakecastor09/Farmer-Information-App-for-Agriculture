import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { User } from '../user.model';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.page.html',
  styleUrls: ['./profile-screen.page.scss'],
})
export class ProfileScreenPage implements OnInit {
  user: User;
  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit() {
    this.user = this.mainService.getUser();
  }
  ionViewWillEnter() {
    this.user = this.mainService.getUser();
  }

  myMethods() {
    this.router.navigateByUrl(
      '/main/tabs/profile/my-methods/' + this.user.userId
    );
  }
}
