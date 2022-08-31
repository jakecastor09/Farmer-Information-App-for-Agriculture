import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  loginClickHandler() {
    this.router.navigateByUrl('/profile-setup/add-image');
  }
}
