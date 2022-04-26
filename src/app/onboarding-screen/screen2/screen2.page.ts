import { Component, Input, OnInit } from '@angular/core';
import { Onboarding } from '../onboarding.model';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.page.html',
  styleUrls: ['./screen2.page.scss'],
})
export class Screen2Page implements OnInit {
  @Input() data: Onboarding[] = [];

  constructor() {}

  ngOnInit() {}
}
