import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthPageService } from 'src/app/auth-page/auth-page.service';
import { MainService } from 'src/app/main/main.service';
import { User } from 'src/app/main/user.model';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
})
export class AddImagePage implements OnInit {
  user: User;
  userLoginLocalId: string;

  constructor(
    private mainService: MainService,
    private authService: AuthPageService,
    private route: Router
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    //getting user login local id
    this.userLoginLocalId = this.authService.userLoginLocalId;
    //get the user who logining
    this.user = this.mainService.getCurrentUser(this.userLoginLocalId);
    //set the current user to the user who login
    this.mainService.setCurrentUser(this.user);
  }

  skipHandlerClick() {
    this.route.navigateByUrl('/profile-setup/crops-or-livestock');
  }
}
