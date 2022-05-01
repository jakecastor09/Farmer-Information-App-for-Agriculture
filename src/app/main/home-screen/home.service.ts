/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Home } from './home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _homeData: Home[] = [];

  constructor() {
    this._homeData = [
      new Home(
        '1',
        'crops',
        'Watermelon',
        'assets/img/home/crops/watermelon2.png',
        'Watermelon is a flowering plant species of the cucurbitaceae family and the name of its edible fruit. Watermelon is grown in favorable climates from tropical to temperate regions worldwide for its large edible fruit. The sweet, juicy flesh is usually deep red to pink, with many black seeds, although seedless varieties exist. The fruit can be eaten raw or pickled, and the rind is edible after cooking. It may also be consumed as a juice or as an ingredient in mixed beverages.',
        [
          {
            text: 'Plant watermelon from late spring to early summer, once soil temperatures reach 70° F or above.',
          },
          {
            text: 'Space watermelon 3 to 5 feet apart in nutrient-rich, well-drained soil with a pH of 6.0 to 6.8.',
          },
          {
            text: 'Give plants a fabulous start to the growing season by improving native soil with several inches of aged compost or other rich organic matter.',
          },
        ],
        [
          {
            text: 'Young watermelon plants can also be bought from nurseries. Plant these after there is no longer a chance of frost occurring; they are very tender. ',
          },
          {
            text: 'Watch the local forecast and err on the side of caution! Consider laying black plastic over your planting area in order to warm the soil even more. ',
          },
          {
            text: 'Starting with young plants can result in an earlier harvest (usually up to 2 weeks earlier), so consider buying young plants part.',
          },
        ]
      ),
    ];
  }

  getHomeData() {
    return [...this._homeData];
  }
}
