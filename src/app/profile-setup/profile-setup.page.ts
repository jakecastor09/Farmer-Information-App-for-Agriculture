import { Component, OnInit } from '@angular/core';
import { AuthPageService } from '../auth-page/auth-page.service';
import { MainService } from '../main/main.service';
import { User } from '../main/user.model';

@Component({
  selector: 'app-profile-setup',
  templateUrl: './profile-setup.page.html',
  styleUrls: ['./profile-setup.page.scss'],
})
export class ProfileSetupPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
