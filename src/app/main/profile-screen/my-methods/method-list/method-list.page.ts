import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-method-list',
  templateUrl: './method-list.page.html',
  styleUrls: ['./method-list.page.scss'],
})
export class MethodListPage implements OnInit {
  name;
  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((paramMap) => {
      this.name = paramMap.name;
    });
  }

  ngOnInit() {}
}
