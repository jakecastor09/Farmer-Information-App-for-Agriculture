/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Livestock } from './home.livestock.model';

@Injectable({
  providedIn: 'root',
})
export class HomeLivestockService {
  livestockColors = [
    { backgroundTextColor: '#DEA794', backgroundColor: '#F6EFEC' },
    { backgroundTextColor: '#C76D71', backgroundColor: '#FFFFFF' },
    { backgroundTextColor: '#E38550', backgroundColor: '#F8E2D5' },
  ];
  _livestockData: Livestock[] = [];
  constructor() {
    this._livestockData = [
      new Livestock(
        1,
        'Pig',
        'assets/img/home/livestock/pig2.png',
        'Though each species has its own unique shape and size, they all share some similarities. Adults generally have large heads with elongated snouts with a round tip. Each of the four feet has four toes, two larger primary toes and two smaller toes. In addition, the largest domestic pig on record reached over 2,500 lbs and the largest wild pigs reach up to 600 lbs.',
        [
          {
            bestWayToRaise:
              'Best Breeding Practices to be Adopted in the Villages',
          },
          {
            bestWayToRaise:
              'Best pig breeding pruchees adapted in the villagee. ( Breeding boar exchange between villages / farmers grops.)',
          },
          {
            bestWayToRaise:
              'For crossbreeding; male piglet exchanged between villages. Every year breeding male must be changed with un-related herd to avoid inbreeding problems.)',
          },
        ],
        [
          {
            tips: 'Buy Piglets: For someone interested in just raising a few pigs a year for meat it is easier to buy piglets than raise your own breeding stock.',
          },
          {
            tips: 'Age Matters: The industry standard for selling baby pigs is 6 weeks of age.',
          },
          {
            tips: 'Space Considerations: Before you bring home piglets you need to have a pen and some sort of shelter for them.',
          },
          {
            tips: 'Fencing: When piglets are young, it is better for them to be in a cattle panel, hog panel, or pallet pen. ',
          },
          {
            tips: 'Feeding Pigs: There are lots of possible ways to feed your pig. The easiest is to buy a commercial hog grower. Pigs grow fastest on this type of ration. ',
          },
          {
            tips: 'Another thing to consider when raising pigs is whether to set up a self-feeder and let the pigs eat whenever they want or feed them a set amount each day',
          },
          {
            tips: 'Medicines & De-Worming We add approximately 1 lb of garlic granules to one ton of feed.In addition, oregano oil is also superb at fighting parasites and infection.',
          },
        ]
      ),

      new Livestock(
        2,
        'Chicken',
        'assets/img/home/livestock/chicken2.png',
        'The “45-days” term is used only and became popular because this type of broiler chicken can be slaughtered between 38 to 45 days. Commercial growers actually harvest their chicken at 38 to 39 days. Few more days and they will incur losses on feeds. Modern white broilers and the most popular ones produced by Cobb-Vantress are usually crossing Cornish Rocks and White Plymouth Rocks.',
        [
          {
            bestWayToRaise:
              'Feed your broiler chickens with booster and grower feeds broilers in the first five weeks. Then give them a broiler finisher. Commercial broiler feeds contain ingredients that accelerate the growth of chickens.',
          },
          {
            bestWayToRaise:
              'If you want your poultry business to be successful, you need to choose chicks that you will raise. First, choose a reliable hatchery or breeding ground for chicks. Find out how healthy the chicks parents are and how to take care of it before you take them.',
          },
          {
            bestWayToRaise:
              'Choose healthy chicks. Healthy chicks have dry and beautiful feathers, beautiful eyes, are active, have no disease or physical abnormality, are consistent in size and color, and should not drop to 33 grams on the first day of hatching. Get the chicks that you think will grow fast.',
          },
          {
            bestWayToRaise:
              'Once the broiler chicks are in the brooder, make sure they receive the right amount of heat, day and night. Avoid sudden changes in brooder temperature in the first two weeks of your chicks.',
          },
          {
            bestWayToRaise:
              'Make sure there is enough space for your chicks to grow. Remember that overcrowding of chicks is the main cause of the slow growth of chickens. Give them proper ventilation to prevent lung diseases in your chickens. Your brooder should also be bright so they can see the food.',
          },
          {
            bestWayToRaise:
              'Give them high-quality feeds or patuka whether it is your own blend or commercial feeds. It must be given correctly on time. Experts say that chicks are better able to use the nutrients that come from the feeds if given on time. But remember that you should not leave the chicks without food for an hour or two.',
          },
          {
            bestWayToRaise:
              'Make sure there is enough space for your chicks to grow. Remember that overcrowding of chicks is the main cause of the slow growth of chickens. Give them proper ventilation to prevent lung diseases in your chickens. Your brooder should also be bright so they can see the food.',
          },
          {
            bestWayToRaise:
              'Keep your brooders clean and dry to keep your pet chickens away from diseases. Brooder conditions should also be as permanent as possible. For example, the sudden removal of the brooders roof, careless door closing, or loss of their light can cause stress which in turn causes slow growth. It is also important to have a consistent feeding schedule with the chicks for three weeks.',
          },
          {
            bestWayToRaise:
              'Be sure to remove weak and sick chicks immediately so that they do not infect others. You need to burn or bury dead chicks and chickens immediately so that they are no longer infested by flies and eaten by rats.',
          },
        ],
        [
          {
            tips: 'If you can take care of the chicken correctly, you can sell it after only  35 to 50 days depending on what breed of chicken you are raising.',
          },
          {
            tips: 'You need to give anti-stress medication to your chickens two to five days before and after they move out of the cage for rearing.',
          },
          {
            tips: 'But before you make the move, you should make sure that their cope has been cleaned and disinfected. Only move chickens if the weather is nice. If it rains, you can just turn it on.',
          },
          {
            tips: 'When it s summer, your broiler chickens are likely to reduce their appetite due to the hot weather. You can give them wet food or you can make ways to lower the temperature, such as spraying the roof and around the cage with water.',
          },
        ]
      ),
      new Livestock(
        3,
        'Native Duck',
        'assets/img/home/livestock/duck2.png',
        'Itik, is the most popularly raised locally. Although smaller than imported breeds, they are good layers and non-sitters. Their eggs are large. Its predominant colors are black and gray. Some are bared (bulek), others are brown or have white feathers mixed with black/green. Males have coarser heads and heavier bodies than females. Males  emit shrill high-pitched sounds. They have curly feathers on top of their tails. Females emit low-pitched quaking sounds. Their tail feathers lie flat or close to the bodies.',
        [
          {
            bestWayToRaise:
              'Free range scheme, which is the traditional way of raising native ducks. In this scheme, ducks are allowed to graze and scavenge on newly harvested rice fields. Rice fields are rich in duck feeds such as rice hull, snails, seeds, grass, fish, and insects. Under the free-range scheme, a temporary shelter and fence created using fishnets is provided to allow ducks to rest in the afternoon. The shelter also serves as a nesting place and provides protection from wild animals. This scheme allows the duck farmer to save on feeds and housing. This is also the popular scheme used for raising ducks one to five months old.',
          },
          {
            bestWayToRaise:
              'Confinement system using a duck house (kamalig). In this scheme, ducks are provided with a balanced diet that includes formulated feeds and clean drinking water, proper floor space, feeding spaces, and other requirements needed for maintenance, growth, and development, and for egg production.',
          },
        ],
        [
          {
            tips: 'Provide them with an unlimited source of clean and fresh water. ',
          },
          {
            tips: 'Each duck will typically require 2 to 3 square feet of floor area to live comfortably.',
          },
          {
            tips: 'The waterers and feeders should be checked regularly to ensure that they are operating correctly and not leaking or spilling liquids.',
          },
          {
            tips: 'Ducks can eat a variety of foods, They live on bugs, snails, fungus, kitchen trash, rice, and other kitchen waste.',
          },
          {
            tips: 'Always remain in touch with the local veterinarian to ensure they are properly immunized at the appropriate time.',
          },
        ]
      ),
    ];
  }
  getLivestockData() {
    return [...this._livestockData];
  }

  getLivestockColors() {
    return [...this.livestockColors];
  }
  getOneLivestockData(livestockId) {
    return {
      ...this._livestockData.find(
        (data) => 'livestock' + data.id === livestockId
      ),
    };
  }
}
