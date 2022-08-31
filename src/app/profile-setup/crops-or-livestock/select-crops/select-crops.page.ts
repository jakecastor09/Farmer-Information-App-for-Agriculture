import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-crops',
  templateUrl: './select-crops.page.html',
  styleUrls: ['./select-crops.page.scss'],
})
export class SelectCropsPage implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}
  buttonClickHandler() {
    this.route.navigateByUrl(
      '/profile-setup/crops-or-livestock/select-livestocks'
    );
  }
}
