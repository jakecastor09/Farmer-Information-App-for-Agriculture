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

    this.router.navigate(['/onboarding/screen1']);
    // this.router.navigate(['/auth-page/validation']);
    // this.router.navigate(['/profile-setup']);
  }
}
