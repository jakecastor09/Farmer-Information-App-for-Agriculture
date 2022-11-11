import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() farmingMethod;
  @Input() nameOfFarmer;
  constructor() {}

  ngOnInit() {}
}
