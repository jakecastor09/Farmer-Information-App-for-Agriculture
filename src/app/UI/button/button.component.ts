import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() name: string;
  @Input() class: string;
  @Input() click;
  @Input() type: string;
  @Input() isValid:boolean;
  constructor() {}

  ngOnInit() {}
}
