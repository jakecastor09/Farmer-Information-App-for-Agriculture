import { Component, Input, OnInit } from '@angular/core';
import { Onboarding } from '../onboarding.model';

@Component({
  selector: 'app-screen4',
  templateUrl: './screen4.page.html',
  styleUrls: ['./screen4.page.scss'],
})
export class Screen4Page implements OnInit {
  @Input() data: Onboarding[] = [];
  constructor() {}

  ngOnInit() {}
}
