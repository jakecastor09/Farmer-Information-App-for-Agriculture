import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-livestocks',
  templateUrl: './select-livestocks.page.html',
  styleUrls: ['./select-livestocks.page.scss'],
})
export class SelectLivestocksPage implements OnInit {
  livestocks;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http
      .get('https://agri-app-96063-default-rtdb.firebaseio.com/livestock.json')
      .subscribe((response) => {
        this.livestocks = response;
      });
  }
  buttonClickHandler() {
    this.router.navigateByUrl(
      '/profile-setup/crops-or-livestock/finished-setup'
    );
  }
}
