import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.page.html',
  styleUrls: ['./welcome-screen.page.scss'],
})
export class WelcomeScreenPage implements OnInit {
  firstName: string;
  constructor(public apiService: ApiService) {}

  ngOnInit() {}

  onClickBtn() {
    const data = {
      firstName: this.firstName,
      middleName: '',
      lastName: '',
      email: '',
      street: '',
      phoneNumber: '',
    };
    this.apiService.addFirstName(data).subscribe(
      (res: any) => {
        console.log('Success ===', res);
        this.firstName = '';
      },
      (error: any) => {
        console.log('ERROR ===', error);
      }
    );
  }
}
