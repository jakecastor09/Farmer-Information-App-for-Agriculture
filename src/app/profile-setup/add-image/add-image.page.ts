import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
})
export class AddImagePage implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  skipHandlerClick() {
    this.route.navigateByUrl('/profile-setup/crops-or-livestock');
  }
}
