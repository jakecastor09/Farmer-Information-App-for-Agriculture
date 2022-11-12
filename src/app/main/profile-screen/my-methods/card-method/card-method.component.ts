import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-method',
  templateUrl: './card-method.component.html',
  styleUrls: ['./card-method.component.scss'],
})
export class CardMethodComponent implements OnInit {
  @Input() name;
  @Input() icon;
  @Input() cardColor;
  @Input() methods;
  @Input() userName;
  @Input() userImg;
  constructor() {}

  ngOnInit() {}
}
