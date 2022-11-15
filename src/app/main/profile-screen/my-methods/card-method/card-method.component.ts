import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-method',
  templateUrl: './card-method.component.html',
  styleUrls: ['./card-method.component.scss'],
})
export class CardMethodComponent implements OnInit {
  @Input() name;
  @Input() icon;
  @Input() cardColor;
  @Input() methods;
  @Input() userName;
  @Input() userImg;
  @Input() userId;
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateMethodList(name) {
    if (this.userName) {
      this.router.navigateByUrl(
        `/main/tabs/profile/my-methods/${this.userId}/method-list/${name}`
      );
    }
  }
}
