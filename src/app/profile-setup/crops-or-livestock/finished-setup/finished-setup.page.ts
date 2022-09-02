import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finished-setup',
  templateUrl: './finished-setup.page.html',
  styleUrls: ['./finished-setup.page.scss'],
})
export class FinishedSetupPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  getStartedButtonHandlerClick() {
    this.router.navigateByUrl('/main/tabs/home');
  }
}
