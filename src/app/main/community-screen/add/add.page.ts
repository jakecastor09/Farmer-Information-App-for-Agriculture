import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  title = '';
  message = '';
  image = '';

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {}

  onClickBtn() {
    const data = {
      type: this.title,
      message: this.message,
      img: this.image,
    };
    this.apiService.addPost(data).subscribe(
      (res: any) => {
        console.log('Success ===', res);
        this.title = '';
        this.message = '';
        this.image = '';
      },
      (error: any) => {
        console.log('ERROR ===', error);
      }
    );
    this.router.navigateByUrl('/main/tabs/community');
  }
}
