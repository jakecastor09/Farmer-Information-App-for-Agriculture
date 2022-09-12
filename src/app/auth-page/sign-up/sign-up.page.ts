import { Component, OnInit } from '@angular/core';
import { AuthPageService } from '../auth-page.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  constructor(private authPageServie: AuthPageService) {}

  ngOnInit() {}

  onSubmit(email, password) {
    this.authPageServie.signup(email, password).subscribe((resData) => {
      console.log(resData);
    });
  }
}
