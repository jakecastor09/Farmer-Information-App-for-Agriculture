/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeLivestockService {
  livestockColors = {
    pig: { backgroundTextColor: '#DEA794', backgroundColor: '#F6EFEC' },
    chicken: { backgroundTextColor: '#C76D71', backgroundColor: '#FFFFFF' },
    duck: { backgroundTextColor: '#E38550', backgroundColor: '#F8E2D5' },
  };
  _livestockData;
  constructor() {
    this._livestockData = [
      {
        id: 1,
        name: 'duck',
        img: 'assets/img/home/livestock/duck2.png',
        description: {
          english: [
            {
              text: 'commonly called itik, is the most popularly raised locally. Although smaller than imported breeds, they are good layers and non-sitters. Their eggs are large. Its predominant colors are black and gray. Some are bared (bulek), others are brown or have white feathers mixed with black/green. Males have coarser heads and heavier bodies than females. Males  emit shrill high-pitched sounds. They have curly feathers on top of their tails. Females emit low-pitched quaking sounds. Their tail feathers lie flat or close to the bodies.',
            },
          ],
          tagalog: [
            {
              text: 'karaniwang tinatawag na itik, ay ang pinakasikat na pinalaki sa lokal. Bagaman mas maliit kaysa sa mga imported na lahi, ang mga ito ay mahusay na mga layer at hindi nakaupo. Malaki ang kanilang mga itlog.Ang mga nangingibabaw na kulay nito ay itim at kulay abo. Ang iba ay bared (bulek), ang iba ay kayumanggi o may puting balahibo na may halong itim/berde. Ang mga lalaki ay may mas magaspang na ulo at mas mabibigat na katawan kaysa sa mga babae. Ang mga lalaki ay naglalabas ng matinis na mataas na tunog. Mayroon silang mga kulot na balahibo sa ibabaw ng kanilang mga buntot. Ang mga babae ay naglalabas ng mababang tunog ng pagyanig. Ang kanilang mga balahibo sa buntot ay nakahiga patag o malapit sa mga katawan.',
            },
          ],
        },
        waysToRaise: {
          english: [
            {
              text: 'Free range scheme, which is the traditional way of raising native ducks. In this scheme, ducks are allowed to graze and scavenge on newly harvested rice fields. Rice fields are rich in duck feeds such as rice hull, snails, seeds, grass, fish, and insects. Under the free-range scheme, a temporary shelter and fence created using fishnets is provided to allow ducks to rest in the afternoon. The shelter also serves as a nesting place and provides protection from wild animals. This scheme allows the duck farmer to save on feeds and housing. This is also the popular scheme used for raising ducks one to five months old.',
            },
            {
              text: 'Confinement system using a duck house (kamalig). In this scheme, ducks are provided with a balanced diet that includes formulated feeds and clean drinking water, proper floor space, feeding spaces, and other requirements needed for maintenance, growth, and development, and for egg production.',
            },
          ],
          tagalog: [
            {
              text: 'free range scheme, na siyang tradisyonal na paraan ng pagpapalaki ng mga katutubong itik. Sa ganitong pamamaraan, ang mga itik ay pinahihintulutang manginain at mag-scavenge sa mga bagong ani na palayan. Ang mga palayan ay mayaman sa mga feed ng itik tulad ng rice hull, snails, buto, damo, isda, at mga insekto. Sa ilalim ng free-range scheme, isang pansamantalang kanlungan at bakod na ginawa gamit ang mga fishnet ay ibinibigay upang payagan ang mga itik na makapagpahinga sa hapon. Ang kanlungan ay nagsisilbi ring pugad at nagbibigay ng proteksyon mula sa mga ligaw na hayop. Ang pamamaraang ito ay nagpapahintulot sa magsasaka ng pato na makatipid sa mga feed at pabahay. Ito rin ang sikat na pamamaraan na ginagamit para sa pagpapalaki ng mga itik isa hanggang limang buwang gulang.',
            },
            {
              text: 'Confinement system gamit ang duck house (kamalig). Sa pamamaraang ito, ang mga itik ay binibigyan ng balanseng diyeta na kinabibilangan ng mga formulated feed at malinis na inuming tubig, tamang espasyo sa sahig, mga feeding space, at iba pang mga kinakailangan para sa pagpapanatili, paglaki, at pag-unlad, at para sa produksyon ng itlog.',
            },
          ],
        },
        foods: {
          english: [
            {
              text: 'should be fed with natural, local feeds such as empty grains (rice), rice and corn bran, ipil-ipil leaves, golden snails, banana trunks, worms, etc.',
            },
          ],
          tagalog: [
            {
              text: 'dapat pakainin ng natural, lokal na mga feed tulad ng walang laman na butil (bigas), palay at corn bran, dahon ng ipil-ipil, golden snails, banana trunks, uod, atbp.',
            },
          ],
        },
        lifeSpan: {
          english: [
            {
              text: 'Native ducks are not as long-lived as geese. The average life span of a native duck is 5 to 10 years.',
            },
          ],
          tagalog: [
            {
              text: 'Ang mga katutubong pato ay hindi kasing haba ng buhay ng mga gansa. Ang average na tagal ng buhay ng isang katutubong pato ay 5 hanggang 10 taon.',
            },
          ],
        },
        levelOfDiffucltyOfRaising: {
          english: [
            {
              text: 'Ducks are messy. If contained continually within a specific area they will, in time, turn it to mud. Ducks require plenty of fresh water for cleaning and staying healthy. Water needs changing regularly to avoid disease.',
            },
          ],
          tagalog: [
            {
              text: 'Ang mga itik ay magulo. Kung patuloy na nakapaloob sa loob ng isang partikular na lugar, sa kalaunan, gagawing putik. Ang mga itik ay nangangailangan ng maraming sariwang tubig para sa paglilinis at pananatiling malusog. Kailangang regular na magpalit ng tubig upang maiwasan ang sakit.',
            },
          ],
        },
        tips: {
          english: [
            {
              text: 'provide them with an unlimited source of clean and fresh water. ',
            },
            {
              text: 'Each duck will typically require 2 to 3 square feet of floor area to live comfortably.',
            },
            {
              text: 'The waterers and feeders should be checked regularly to ensure that they are operating correctly and not leaking or spilling liquids.',
            },
            {
              text: 'Ducks can eat a variety of foods, They live on bugs, snails, fungus, kitchen trash, rice, and other kitchen waste',
            },
            {
              text: 'Always remain in touch with the local veterinarian to ensure they are properly immunized at the appropriate time.',
            },
          ],
          tagalog: [
            {
              text: 'bigyan sila ng walang limitasyong mapagkukunan ng malinis at sariwang tubig.',
            },
            {
              text: 'Ang bawat pato ay karaniwang mangangailangan ng 2 hanggang 3 talampakang parisukat ng lawak ng sahig upang mabuhay nang kumportable.',
            },
            {
              text: 'Ang mga waterer at feeder ay dapat na regular na suriin upang matiyak na ang mga ito ay gumagana nang tama at hindi tumutulo o tumatapon ng mga likido.',
            },
            {
              text: "Maaaring kumain ang mga itik ng iba't ibang pagkain, Nabubuhay sila sa mga surot, kuhol, halamang-singaw, basura sa kusina, bigas, at iba pang basura sa kusina",
            },
            {
              text: 'Palaging makipag-ugnayan sa lokal na beterinaryo upang matiyak na sila ay nabakunahan nang maayos sa naaangkop na oras.',
            },
          ],
        },
      },
      {
        id: 2,
        name: 'pig',
        img: 'assets/img/home/livestock/pig2.png',
        description: {
          english: [
            {
              text: 'Though each species has its own unique shape and size, they all share some similarities. Adults generally have large heads with elongated snouts with a round tip. Each of the four feet has four toes, two larger primary toes and two smaller toes. In addition, the largest domestic pig on record reached over 2,500 lbs and the largest wild pigs reach up to 600 lbs. Young pigs can be weaned from their mothers after two or three months. They will continue to grow well into their adult years, but it is important to socialize them while they are young. Adult Pigs. Once a pig reaches sexual maturity, it is considered an adult. This age can vary greatly. It usually happens between 2 to 5 years of age, but it will depend on the individual pig and specific breed of pig.',
            },
          ],
          tagalog: [
            {
              text: 'Kahit na ang bawat species ay may sariling natatanging hugis at sukat, lahat sila ay may ilang pagkakatulad. Ang mga matatanda ay karaniwang may malalaking ulo na may mga pahabang nguso na may pabilog na dulo. Ang bawat isa sa apat na paa ay may apat na daliri ng paa, dalawang mas malalaking pangunahing daliri at dalawang mas maliliit na daliri. Bilang karagdagan, ang pinakamalaking alagang baboy sa talaan ay umabot ng higit sa 2,500 lbs at ang pinakamalaking ligaw na baboy ay umabot ng hanggang 600 lbs. Ang mga batang baboy ay maaaring ihiwalay sa kanilang mga ina pagkatapos ng dalawa o tatlong buwan. Patuloy silang lalago hanggang sa kanilang mga taong nasa hustong gulang, ngunit mahalagang makihalubilo sila habang sila ay bata pa. Mga Baboy na nasa hustong gulang Kapag ang baboy ay umabot na sa sekswal na kapanahunan, ito ay itinuturing na isang may sapat na gulang. Ang edad na ito ay maaaring mag-iba nang malaki. Karaniwan itong nangyayari sa pagitan ng 2 hanggang 5 taong gulang, ngunit ito ay depende sa indibidwal na baboy at partikular na lahi ng baboy.',
            },
          ],
        },
        waysToRaise: {
          english: [
            {
              text: "When raising a grower pig, you will need to purchase a weaned piglet from a farm or breeder. These piglets are usually about 8 weeks old (50-60lbs) and have just been weaned from their mother's milk. Finishing the pig will take about 4-6 months so the best time to get started is early spring-mid summer.Best Breeding Practices to be Adopted in the Villages Best pig breeding pruchees adapted in the villagee. ( Breeding boar exchange between villages / farmers grops.) For crossbreeding; male piglet exchanged between villages. Every year breeding male must be changed with un-related herd to avoid inbreeding problems.",
            },
          ],
          tagalog: [
            {
              text: 'Kapag nag-aalaga ng grower na baboy, kakailanganin mong bumili ng awat na biik mula sa isang sakahan o breeder. Ang mga biik na ito ay karaniwang mga 8 linggo ang gulang (50-60lbs) at kalalabas pa lamang sa gatas ng kanilang ina. Ang pagtatapos ng baboy ay aabutin ng humigit-kumulang 4-6 na buwan kaya ang pinakamainam na oras upang magsimula ay ang unang bahagi ng tagsibol-kalagitnaan ng tag-init.Pinakamahusay na Mga Kasanayan sa Pag-aanak na Dapat Pagtibayin sa mga Nayon Pinakamahusay na baboy breeding pruchees inangkop sa villagee. ( Pagpapalitan ng baboy-ramo sa pagitan ng mga nayon / mga magsasaka.) Para sa crossbreeding lalaking biik na ipinagpalit sa pagitan ng mga nayon. Taun-taon breeding Ang lalaki ay dapat palitan ng hindi nauugnay na kawan upang maiwasan ang mga problema sa inbreeding. ',
            },
          ],
        },
        foods: {
          english: [
            {
              text: 'They eat different mixtures of feed as they grow. The bulk of their diet comes from corn and soybeans. Corn provides energy and soybeans provide protein. They also eat other grains like wheat and sorghum. Farmers may add supplements to ensure their hogs get necessary nutrients.  Young pig should be fed commercial grade pig pellets or food, hay, and fresh vegetables.',
            },
          ],
          tagalog: [
            {
              text: "Kumakain sila ng iba't ibang pinaghalong feed habang lumalaki sila. Ang karamihan ng kanilang diyeta ay mula sa mais at soybeans. Ang mais ay nagbibigay ng enerhiya at ang soybean ay nagbibigay ng protina. Kumakain din sila ng iba pang butil tulad ng trigo at sorghum. Ang mga magsasaka ay maaaring magdagdag ng mga suplemento upang matiyak na ang kanilang mga baboy ay makakakuha ng mga kinakailangang sustansya. Ang batang baboy ay dapat pakainin ng commercial grade pig pellets o pagkain, dayami, at sariwang gulay.",
            },
          ],
        },
        lifeSpan: {
          english: [
            {
              text: 'Pigs live an average of 5-18 years, depending on their domesticated status.',
            },
          ],
          tagalog: [
            {
              text: 'Ang mga baboy ay nabubuhay sa average na 5-18 taon, depende sa kanilang domesticated status.',
            },
          ],
        },
        levelOfDiffucltyOfRaising: {
          english: [
            {
              text: 'The major challenges to the pig industry are inadequate slaughter facilities, unorganized marketing, inadequate supply of breeding stock, high price of feeds, as well as, low quality feeds. Size. Most owners will buy pet breed pigs when they are much smaller than their final weight and dimensions. Aggression and behaviour problems,Bylaw,Feeding',
            },
          ],
          tagalog: [
            {
              text: 'Ang mga pangunahing hamon sa industriya ng baboy ay hindi sapat na mga pasilidad ng pagpatay, hindi organisadong marketing, hindi sapat na supply ng breeding stock, mataas na presyo ng mga feed, gayundin, mababang kalidad ng mga feed. Sukat. Karamihan sa mga may-ari ay bibili ng mga alagang baboy na lahi kapag sila ay mas maliit kaysa sa kanilang huling timbang at sukat. Mga problema sa pagsalakay at pag-uugali, Batas, Pagpapakain',
            },
          ],
        },
        tips: {
          english: [
            {
              text: 'provide them with an unlimited source of clean and fresh water. ',
            },
            {
              text: 'Each duck will typically require 2 to 3 square feet of floor area to live comfortably.',
            },
            {
              text: 'The waterers and feeders should be checked regularly to ensure that they are operating correctly and not leaking or spilling liquids.',
            },
            {
              text: 'Ducks can eat a variety of foods, They live on bugs, snails, fungus, kitchen trash, rice, and other kitchen waste',
            },
            {
              text: 'Always remain in touch with the local veterinarian to ensure they are properly immunized at the appropriate time.',
            },
          ],
          tagalog: [
            {
              text: 'Pagpapanatiling Baboy\n          Kakailanganin mong mag-set up ng nabakuran na enclosure na may ilang uri ng istraktura para sa kanilang kanlungan. Ang isang kamalig ay mahusay, ngunit hindi kinakailangan. Ang kanilang pagkain at tubig ay kailangan lamang suriin at muling punuin bawat ilang araw hanggang isang linggo. At iyon ay tungkol sa lahat ng trabaho na kinakailangan upang mag-alaga ng mga baboy.',
            },
            {
              text: 'Bumili ng Piglets\n          Para sa isang taong interesado sa pag-aalaga lamang ng ilang baboy sa isang taon para sa karne ay mas madaling bumili ng biik kaysa mag-alaga ng sarili mong breeding stock.',
            },
            {
              text: 'Mahalaga ang Edad\n          Ang pamantayan ng industriya para sa pagbebenta ng mga sanggol na baboy ay 6 na linggo ang edad.',
            },
            {
              text: 'Mga Pagsasaalang-alang sa Space\n          Bago ka mag-uwi ng mga biik, kailangan mong magkaroon ng kulungan at isang uri ng silungan para sa kanila.',
            },
            {
              text: 'Pagbabakod\n          Kapag bata pa ang mga biik, mas mabuti na sila ay nasa cattle panel, hog panel, o pallet pen.',
            },
            {
              text: 'Pagpapakain ng Baboy\n          Mayroong maraming mga posibleng paraan upang pakainin ang iyong baboy. Ang pinakamadali ay bumili ng komersyal na hog grower. Pinakamabilis lumaki ang mga baboy sa ganitong uri ng rasyon.',
            },
            {
              text: 'Ang isa pang bagay na dapat isaalang-alang kapag nag-aalaga ng mga baboy ay kung mag-set up ng isang self-feeder at hayaan ang mga baboy na kumain kahit kailan nila gusto o pakainin sila ng isang nakatakdang halaga bawat araw',
            },
            {
              text: 'Mga Gamot at De-Worming\n          Nagdaragdag kami ng humigit-kumulang 1 lb ng mga butil ng bawang sa isang toneladang feed.\n          Bilang karagdagan, ang langis ng oregano ay napakahusay din sa paglaban sa mga parasito at impeksyon.',
            },
          ],
        },
      },
      {
        id: 3,
        name: 'chicken',
        img: 'assets/img/home/livestock/chicken2.png',
        description: {
          english: [
            {
              text: 'The “45-days” term is used only and became popular because this type of broiler chicken can be slaughtered between 38 to 45 days. Commercial growers actually harvest their chicken at 38 to 39 days. Few more days and they will incur losses on feeds.\n          Modern white broilers and the most popular ones produced by Cobb-Vantress are usually crossing Cornish Rocks and White Plymouth Rocks.',
            },
          ],
          tagalog: [
            {
              text: 'Ang terminong "45-days" ay ginagamit lamang at naging popular dahil ang ganitong uri ng broiler chicken ay maaaring katayin sa pagitan ng 38 hanggang 45 araw. Ang mga komersyal na grower ay aktwal na nag-aani ng kanilang manok sa 38 hanggang 39 na araw. Ilang araw pa at magkakaroon sila ng mga pagkalugi sa mga feed.\n          Ang mga modernong puting broiler at ang pinakasikat na ginawa ng Cobb-Vantress ay karaniwang tumatawid sa Cornish Rocks at White Plymouth Rocks.',
            },
          ],
        },
        waysToRaise: {
          english: [
            {
              text: 'Stock should be purchased from a reliable hatchery or dealer where the parent stocks are well housed and well managed.',
            },
            {
              text: 'Select/buy only healthy chicks (i.e. dry, fluffy feathers, bright eyes, and alert and active appearance; free from diseases, and abnormalities; chicks should have uniform size and color; and in the case of broiler chicks, it should be less than 33 g. at day-old)',
            },
            {
              text: 'Choose those that have high livability and are fast growers.',
            },
          ],
          tagalog: [
            {
              text: 'Ang stock ay dapat bilhin mula sa isang maaasahang hatchery o dealer kung saan ang mga parent stock ay maayos na nakalagay at maayos na pinamamahalaan.',
            },
            {
              text: 'Pumili/bumili lamang ng malulusog na sisiw (i.e. tuyo, malalambot na balahibo, matingkad na mata, at alerto at aktibong hitsura; libre sa mga sakit, at abnormalidad; ang mga sisiw ay dapat magkaroon ng pare-parehong laki at kulay; at sa kaso ng mga broiler chicks, ito ay dapat na mas kaunti. higit sa 33 g. sa araw na gulang)',
            },
            {
              text: 'Piliin ang mga may mataas na livability at mabilis magtanim.',
            },
          ],
        },
        foods: {
          english: [
            {
              text: 'Feed your broiler chickens with booster and grower feeds broilers in the first five weeks. Then give them a broiler finisher. Commercial broiler feeds contain ingredients that accelerate the growth of chickens.',
            },
          ],
          tagalog: [
            {
              text: 'Pakanin ang iyong mga manok ng broiler na may booster at grower feed na broiler sa unang limang linggo. Pagkatapos ay bigyan sila ng broiler finisher. Ang mga commercial broiler feed ay naglalaman ng mga sangkap na nagpapabilis sa paglaki ng mga manok.',
            },
          ],
        },
        lifeSpan: {
          english: [
            {
              text: 'Within industrial agriculture scenarios, however, the lives of broiler chickens are cut drastically short. Birds can be slaughtered anywhere from 21 days to 170 days old. The typical slaughter age is 47 days, and  slaughter age is 42 days.',
            },
          ],
          tagalog: [
            {
              text: 'Sa loob ng mga sitwasyong pang-industriya sa agrikultura, gayunpaman, ang buhay ng mga manok na broiler ay napakaikli. Maaaring katayin ang mga ibon kahit saan mula 21 araw hanggang 170 araw ang edad. Ang karaniwang edad ng pagpatay ay 47 araw, at ang edad ng pagpatay ay 42 araw.',
            },
          ],
        },
        levelOfDiffucltyOfRaising: {
          english: [
            {
              text: '',
            },
          ],
          tagalog: [
            {
              text: '',
            },
          ],
        },
        tips: {
          english: [
            {
              text: 'You need to give anti-stress medication to your chickens two to five days before and after they move out of the cage for rearing.',
            },
            {
              text: "When it's summer, your broiler chickens are likely to reduce their appetite due to the hot weather. You can give them wet food or you can make ways to lower the temperature, such as spraying the roof and around the cage with water.",
            },
          ],
          tagalog: [
            {
              text: 'Kailangan mong bigyan ng anti-stress na gamot ang iyong mga manok dalawa hanggang limang araw bago at pagkatapos nilang umalis sa kulungan para sa pag-aalaga.',
            },
            {
              text: 'Kapag tag-araw, ang iyong mga manok na broiler ay malamang na mabawasan ang kanilang gana dahil sa mainit na panahon. Maaari mo silang bigyan ng basang pagkain o maaari kang gumawa ng mga paraan upang mapababa ang temperatura, tulad ng pag-spray ng tubig sa bubong at sa paligid ng hawla.',
            },
          ],
        },
      },
    ];
  }

  getLivestockData() {
    return [...this._livestockData];
  }
  getLivestockDataByName(livestockName) {
    return {
      ...this._livestockData.find((data) => data.name === livestockName),
    };
  }

  getLivestockColors() {
    return this.livestockColors;
  }
  getOneLivestockData(livestockId) {
    return {
      ...this._livestockData.find(
        (data) => 'livestock' + data.id === livestockId
      ),
    };
  }
}
