import { Component, Input, OnInit } from '@angular/core';
import { Onboarding } from '../onboarding.model';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.page.html',
  styleUrls: ['./screen3.page.scss'],
})
export class Screen3Page implements OnInit {
  @Input() data: Onboarding[] = [];

  constructor() {}

  ngOnInit() {}
}
