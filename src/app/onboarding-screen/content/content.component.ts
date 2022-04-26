import { Component, Input, OnInit } from '@angular/core';
import { Onboarding } from '../onboarding.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() data: Onboarding[] = [];
  constructor() {}

  ngOnInit() {}
}
