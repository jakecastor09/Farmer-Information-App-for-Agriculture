/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Crops } from './home.crops.model';

@Injectable({
  providedIn: 'root',
})
export class HomeCropsService {
  cropsColors = [
    { backgroundTextColor: '#3C800F', backgroundColor: '#E5F4DB' },
    { backgroundTextColor: '#FDD320', backgroundColor: '#FDEFBD' },
    { backgroundTextColor: '#FE8A14', backgroundColor: '#FFF' },
    { backgroundTextColor: '#E6BB45', backgroundColor: '#F6E7C0' },
    { backgroundTextColor: '#3C800F', backgroundColor: '#E5F4DB' },
    { backgroundTextColor: '#43203b', backgroundColor: '#D2CCD2' },
  ];

  private _cropsData: Crops[] = [];

  constructor() {
    this._cropsData = [
      new Crops(
        1,
        'Watermelon',
        'assets/img/home/crops/watermelon2.png',
        'Watermelon is a flowering plant species of the cucurbitaceae family and the name of its edible fruit. Watermelon is grown in favorable climates from tropical to temperate regions worldwide for its large edible fruit. The sweet, juicy flesh is usually deep red to pink, with many black seeds, although seedless varieties exist. The fruit can be eaten raw or pickled, and the rind is edible after cooking. It may also be consumed as a juice or as an ingredient in mixed beverages.',
        [
          {
            bestTimeToPlant:
              'Plant watermelon from late spring to early summer, once soil temperatures reach 70° F or above.',
          },
          {
            bestTimeToPlant:
              'Space watermelon 3 to 5 feet apart in nutrient-rich, well-drained soil with a pH of 6.0 to 6.8.',
          },
          {
            bestTimeToPlant:
              'Give plants a fabulous start to the growing season by improving native soil with several inches of aged compost or other rich organic matter.',
          },
        ],
        [
          {
            tips: 'Young watermelon plants can also be bought from nurseries. Plant these after there is no longer a chance of frost occurring; they are very tender.',
          },
          {
            tips: 'Watch the local forecast and err on the side of caution! Consider laying black plastic over your planting area in order to warm the soil even more. ',
          },
          {
            tips: 'Starting with young plants can result in an earlier harvest (usually up to 2 weeks earlier), so consider buying young plants part.',
          },
        ]
      ),
      new Crops(
        2,
        'Banana',
        'assets/img/home/crops/banana2.png',
        'Banana is an elongated, edible fruit - botanically a berry. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow upward in clusters near the top of the plant. ',
        [
          {
            bestTimeToPlant:
              'Banana can be planted throughout the year except in severe winter and during heavy rains when the soil remains very wet.',
          },
          {
            bestTimeToPlant:
              'The ideal time (October-November) of planting is after the monsoon season.',
          },
          {
            bestTimeToPlant:
              'With assured irrigation, the planting can also be done in February-March.',
          },
          {
            bestTimeToPlant:
              'Plant population depends on cultivars, topography and soil fertility.',
          },
        ],
        [
          {
            tips: 'Mature bananas are not harvested when they are yellow but while they are still green.',
          },
          {
            tips: 'As the fruit matures the fingers get fatter but stay green. ',
          },
          {
            tips: 'Bananas are ready to pick when they look well rounded between the ribs and the little flowers at the end are dry and rub off easily.',
          },
          {
            tips: 'It is best to cut off the whole stalk of bananas. Hang your stalk of bananas in a shady spot to finish ripening.',
          },
          {
            tips: 'They usually ripen from the top to the bottom going from green to yellow.',
          },
        ]
      ),
      new Crops(
        3,
        'Melon',
        'assets/img/home/crops/melon2.png',
        'Melon is any of various plants of the family cucurbitaceae with sweet, edible, and fleshy fruit.  The word "melon" can refer to either the plant or specifically to the fruit. Botanically, a melon is a kind of berry, specifically a "pepo". The word melon derives from Latin melopepo, which is the latinization of the Greek μηλοπέπων (mēlopepōn).',
        [
          {
            bestTimeToPlant:
              'Melons plants require 8-10 weeks of good, hot growing weather from the middle of June to the end of August. During that time, a melon vine must grow 5-9 leaves before starting to flower, then set 4 or more male flowers before making its first female flower, and then ripen its fruit before cool, damp weather sets in.',
          },
        ],
        [
          {
            tips: 'Melons will not all ripen at the same time, so plan to pick them as they become ready.',
          },
          {
            tips: 'Melon seed germination is best between 70°F and 90°F.',
          },
          {
            tips: 'Plant only after the soil temperature has reached 65°F, when nights as well as days are warm.',
          },
          {
            tips: 'Planting in cooler soil can lead to soil-borne root diseases, which can stunt or kill melon plants, and the plants will grow slowly even if they do not show signs of disease.',
          },
          {
            tips: 'In the southern half of Minnesota, most soils are not usually warm enough to plant melons until after May 20.',
          },
        ]
      ),
      new Crops(
        4,
        'Palay',
        'assets/img/home/crops/palay2.png',
        'Rice is an edible starchy cereal grain and the grass plant by which it is produced. The cultivated rice plant is an annual grass and grows to about 1.2 metres (4 feet) in height. The leaves are long and flattened and are borne on hollow stems. The fibrous root system is often broad and spreading. Varieties differ greatly in the length, shape, and weight of the panicle and the overall productivity of a given plant. ',
        [
          {
            bestTimeToPlant:
              'Planting in early June, ensures that much of the light during the longest days of the year will not be captured. harvest is delayed substantially. Therefore, we suggest planting early  provided a good seedbed has been prepared, temperatures are conducive to rice growth, and water is available.',
          },
        ],
        [
          {
            tips: 'Transplantation is the most commonly used method wherein seeds are first sown in nursery and the seedlings are transplanted to the main field once they show 3-4 leaves. Although this is the best yielding method, it requires heavy labor.',
          },
          {
            tips: 'Soils with good water retention capacity with high amount of clay and organic matter are ideal for rice cultivation. Clay or clay loams are most suited for rice cultivation. Such soils are capable of holding water for long and sustain crop.',
          },
          {
            tips: 'Harvest at the right time with the right moisture content.',
          },
          {
            tips: 'Avoid delays in threshing after harvesting.',
          },
          {
            tips: 'Use proper machine settings when using a threshing machine.',
          },
          {
            tips: 'Clean the grains properly after threshing.',
          },
          {
            tips: 'Dry the grains immediately after threshing.',
          },
        ]
      ),
      new Crops(
        5,
        'String Beans',
        'assets/img/home/crops/sitaw.png',
        'String beans is a vegerable vines. This have a long vines which crawl. The leaves of it is smooth. The flowers is color violet when appear and looks like a butterfly. The fruit of is about 8 to 14 inches long depends on variety. The seeds is color green when not ripe and color indigo to black when ripe for some variety. It is color brown when dry.',
        [
          {
            bestTimeToPlant:
              'Best grown in areas with a temperature of 20 degrees Celsius to 35 degrees Celsius.',
          },
        ],
        [
          {
            tips: 'Plant 2-3 seeds at a depth of 3 centimeters on each hill with a spacing of 60-80 centimeters in each furrow with a spacing of one meter.',
          },
          {
            tips: 'It can also be grown in any type of soil as long as it has a pH level of 5.5 to 6.6.',
          },
          {
            tips: 'Water the crop every 10 days during the summer.',
          },
          {
            tips: 'Apply fertilizers to the plants.',
          },
          {
            tips: 'Harvest the sitaw when it is green and before it ripens. Harvest it twice a week; during the morning and afternoon',
          },
        ]
      ),
      new Crops(
        6,
        'Egg Plant',
        'assets/img/home/crops/eggplant2.png',
        'Eggplant or talong is a well-known vegetable commonly eaten by Filipinos. It is from a small plant covered with pointed feathers. It has purple and yellow flowers in the middle, while the fruit that is used as a vegetable is long. This plant commonly grows in many plantations throughout the Philippine archipelago. The fruit contains trigonelline, choline, vitamins A. B, and C, fats, protein, and the minerals calcium, phosphorus, and iron.',
        [
          {
            bestTimeToPlant:
              'Best grown in areas with a temperature of 20 degrees Celsius to 35 degrees Celsius.',
          },
        ],
        [
          {
            tips: 'Protect them from excessive or too much sunlight.',
          },
          {
            tips: 'Apply fertilizers to the plants.',
          },
          {
            tips: 'You can also prune the plants to remove excess leaves.',
          },
          {
            tips: 'Harvest it when they are still young.',
          },
          {
            tips: 'Also consider watering the plant consistently and moderately.',
          },
          {
            tips: 'Immediately remove and destroy any infected crop.',
          },
          {
            tips: 'Use of insecticides can also help to curb the spread of disease.',
          },
        ]
      ),
    ];
  }

  getCropsData() {
    return [...this._cropsData];
  }
  getCropsColors() {
    return [...this.cropsColors];
  }
  getCropData(cropId) {
    console.log(cropId);
    return { ...this._cropsData.find((data) => 'crop' + data.id === cropId) };
  }
}
