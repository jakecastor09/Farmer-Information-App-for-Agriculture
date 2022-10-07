import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { User } from '../user.model';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.page.html',
  styleUrls: ['./profile-screen.page.scss'],
})
export class ProfileScreenPage implements OnInit {
  user: User;
  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.user = this.mainService.getUser();
  }
  ionViewWillEnter() {
    this.user = this.mainService.getUser();
  }
}
