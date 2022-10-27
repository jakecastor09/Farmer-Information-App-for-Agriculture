import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-screen',
  templateUrl: './logo-screen.page.html',
  styleUrls: ['./logo-screen.page.scss'],
})
export class LogoScreenPage implements OnInit {
  load = false;
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.modalController.dismiss();
      this.navigate();
      this.load = true;
    }, 500);
  }
  navigate() {
    if (this.load) {
      return;
    }
    //Default home
    // this.router.navigate(['/profile-setup/crops-or-livestock/select-crops']);
    // this.router.navigate(['/main/tabs/community/edit']);

    // this.router.navigate(['/main/tabs/home']);
    // this.router.navigate(['/main/tabs/profile/agriculture']);

    // this.router.navigate([
    //   'main/tabs/profile/my-methods/Gb2yLsNquuhdUaIZWpxcXGFCQQ23',
    // ]);

    // this.router.navigate([
    //   '/main/tabs/home/user-details/bIJjlv0RsfZ3MX1vA7M9HuZN1v73',
    // ]);

    this.router.navigate(['onboarding/screen1']);

    // this.router.navigate(['/main/tabs/home']);
  }
}
