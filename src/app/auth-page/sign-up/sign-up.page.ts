import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthPageService } from '../auth-page.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  constructor(private authPageServie: AuthPageService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
