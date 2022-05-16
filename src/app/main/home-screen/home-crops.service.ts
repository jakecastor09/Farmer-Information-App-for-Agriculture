/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeCropsService {
  cropsColors = {
    watermelon: {
      backgroundTextColor: '#3C800F',
      backgroundColor: '#C3E7AC',
    },
    banana: {
      backgroundTextColor: '#FDD320',
      backgroundColor: '#FDEFBD',
    },
    melon: {
      backgroundTextColor: '#FE8A14',
      backgroundColor: '#FFF',
    },
    palay: {
      backgroundTextColor: '#E6BB45',
      backgroundColor: '#F6E7C0',
    },
    beans: {
      backgroundTextColor: '#86C03F',
      backgroundColor: '#DDEFC6',
    },
    eggplant: {
      backgroundTextColor: '#43203b',
      backgroundColor: '#D2CCD2',
    },
  };

  public _cropsData;

  constructor() {
    this._cropsData = [
      {
        id: 1,
        type: 'crops',
        name: 'watermelon',
        img: 'assets/img/home/crops/watermelon2.png',
        icon: 'assets/img/details/crops/watermelon/icon.png',
        images: {
          descriptionImg: 'assets/img/details/crops/watermelon/description.png',
          bestTimeToPlantImg:
            'assets/img/details/crops/watermelon/planting.png',
          tipsImg: 'assets/img/details/crops/watermelon/tips.png',
        },
        item1: {
          title: 'Description',
          english:
            'Watermelon is a flowering plant species of the cucurbitaceae family and the name of its edible fruit. Watermelon is grown in favorable climates from tropical to temperate regions worldwide for its large edible fruit. The sweet, juicy flesh is usually deep red to pink, with many black seeds, although seedless varieties exist. The fruit can be eaten raw or pickled, and the rind is edible after cooking. It may also be consumed as a juice or as an ingredient in mixed beverages.',

          filipino: `Ang pakwan ay pinatubo sa mga paborableng klima mula sa tropikal hanggang sa mapagtimpi na mga rehiyon sa buong mundo para sa malalaking prutas na nakakain nito. Ang matamis, makatas na laman ay karaniwang malalim na pula hanggang rosas, na may maraming itim na buto, bagama't may mga walang binhing varieties. Ang prutas ay maaaring kainin ng hilaw o adobo, at ang balat ay nakakain pagkatapos lutuin. Maaari rin itong kainin bilang juice o bilang isang sangkap sa mga pinaghalong inumin.`,
        },
        item2: {
          title: 'Best Time to Plant',
          english:
            'Plant watermelon from late spring to early summer, once soil temperatures reach 70° F or above.\nSpace watermelon 3 to 5 feet apart in nutrient-rich, well-drained soil with a pH of 6.0 to 6.8.\nGive plants a fabulous start to the growing season by improving native soil with several inches of aged compost or other rich organic matter.',
          filipino:
            'Magtanim ng pakwan mula sa huling bahagi ng tagsibol hanggang sa unang bahagi ng tag-araw, kapag ang temperatura ng lupa ay umabot sa 70° F o mas mataas.\nSpace watermelon na 3 hanggang 5 talampakan ang pagitan sa mayaman sa sustansya, mahusay na pinatuyo na lupa na may pH na 6.0 hanggang 6.8.\nBigyan ang mga halaman ng isang kamangha-manghang simula sa panahon ng pagtatanim sa pamamagitan ng pagpapabuti ng katutubong lupa na may ilang pulgada ng lumang compost o iba pang mayamang organikong bagay. ',
        },
        item3: {
          title: 'Fertilizers Needed',
          english:
            'Watermelons grow most robustly with higher amounts of nitrogen when they are young and higher amounts of potassium and phosphorus during active melon production.  Using high nitrogen fertilizers after the melons are setting can result in excessive foliage growth rather than melon development.',
          filipino:
            'Ang mga pakwan ay lumalaki nang pinakamalakas na may mas mataas na halaga ng nitrogen kapag sila ay bata pa at mas mataas na dami ng potassium at phosphorus sa panahon ng aktibong paggawa ng melon. Ang paggamit ng mataas na nitrogen fertilizers pagkatapos ng paglalagay ng mga melon ay maaaring magresulta sa labis na paglaki ng mga dahon sa halip na pagbuo ng melon.',
        },
        item4: {
          title: 'Life Span',
          english:
            'Uncut watermelons will last 7-10 days on the counter and 2-3 weeks in the fridge, cut watermelon are also listed in our table. The shelf life of watermelon depends when the watermelon was picked and how it is stored.',

          filipino:
            'Ang mga hindi pinutol na pakwan ay tatagal ng 7-10 araw sa counter at 2-3 linggo sa refrigerator, nakalista din sa aming talahanayan ang mga hiniwang pakwan. Ang buhay ng istante ng pakwan ay depende kung kailan pinili ang pakwan at kung paano ito iniimbak.',
        },
        item5: {
          title: 'Level of Difficulty of Planting',
          english:
            'Watermelons need a long period of warm weather to grow well, they tend to be more popular in warmer climates with long growing seasons. However, gardeners in colder climates can still have success in growing watermelons by starting seeds indoors or purchasing young plants from a nursery, and by growing shorter-season varieties. Depending on the variety of watermelon, it can take between 70 and 100 days to go from planting to harvest.',

          filipino: `Ang mga pakwan ay nangangailangan ng mahabang panahon ng mainit-init na panahon upang lumago nang maayos, malamang na mas sikat sila sa mas maiinit na klima na may mahabang panahon ng paglaki. Gayunpaman, ang mga hardinero sa mas malamig na klima ay maaari pa ring magkaroon ng tagumpay sa pagtatanim ng mga pakwan sa pamamagitan ng pagsisimula ng mga buto sa loob ng bahay o pagbili ng mga batang halaman mula sa isang nursery, at sa pamamagitan ng pagtatanim ng mga varieties ng mas maikling panahon. Depende sa iba't ibang pakwan, maaari itong tumagal sa pagitan ng 70 at 100 araw upang pumunta mula sa pagtatanim hanggang sa pag-aani.`,
        },
        item6: {
          title: 'Tips to have a good harvest',
          english:
            'Young watermelon plants can also be bought from nurseries. Plant these after there is no longer a chance of frost occurring; they are very tender.\nWatch the local forecast and err on the side of caution! Consider laying black plastic over your planting area in order to warm the soil even more.\nStarting with young plants can result in an earlier harvest (usually up to 2 weeks earlier), so consider buying young plants part.',

          filipino:
            'Mabibili rin ang mga batang pakwan sa mga nursery. Itanim ang mga ito pagkatapos na wala nang pagkakataon na magkaroon ng hamog na nagyelo; napakalambing nila.\nPanoorin ang lokal na forecast at magkamali sa panig ng pag-iingat! Isaalang-alang ang paglalagay ng itim na plastik sa ibabaw ng iyong planting area upang mas mapainit ang lupa.\nAng pagsisimula sa mga batang halaman ay maaaring magresulta sa mas maagang pag-aani (karaniwan ay hanggang 2 linggo na mas maaga), kaya isaalang-alang ang pagbili ng bahagi ng mga batang halaman.',
        },
      },
      {
        id: 2,
        name: 'melon',
        type: 'crops',
        img: 'assets/img/home/crops/melon2.png',
        icon: 'assets/img/details/crops/melon/icon.png',
        images: {
          descriptionImg: 'assets/img/details/crops/melon/image.png',
        },
        item1: {
          title: 'Description',
          english:
            'is any of various plants of the family cucurbitaceae with sweet, edible, and fleshy fruit.  The word "melon" can refer to either the plant or specifically to the fruit. Botanically, a melon is a kind of berry, specifically a "pepo". The word melon derives from Latin melopepo, which is the latinization of the Greek μηλοπέπων (mēlopepōn).',

          filipino:
            'ay alinman sa iba\'t ibang halaman ng pamilyang cucurbitaceae na may matamis, nakakain, at mataba na prutas. Ang salitang "melon" ay maaaring tumukoy sa alinman sa halaman o partikular sa prutas. Botanically, ang melon ay isang uri ng berry, partikular na isang "pepo".',
        },
        item2: {
          title: 'Best Time to Plant',
          english:
            'Melons plants require 8-10 weeks of good, hot growing weather from the middle of June to the end of August. During that time, a melon vine must grow 5-9 leaves before starting to flower, then set 4 or more male flowers before making its first female flower, and then ripen its fruit before cool, damp weather sets in.',

          filipino:
            'Ang mga halaman ng melon ay nangangailangan ng 8-10 linggo ng maganda, mainit na lumalagong panahon mula sa kalagitnaan ng Hunyo hanggang sa katapusan ng Agosto.\nSa panahong iyon, ang melon vine ay dapat tumubo ng 5-9 na dahon bago magsimulang mamulaklak, pagkatapos ay magtakda ng 4 o higit pang lalaki na bulaklak bago gawin ang unang babaeng bulaklak nito, at pagkatapos ay pahinugin ang bunga nito bago sumapit ang malamig at mamasa-masa na panahon.',
        },
        item3: {
          title: 'Fertilizers Needed',
          english: `Organic fertilizers such as compost and well-rotted manure make excellent fertilizer for cantaloupes. The elements aren't as concentrated in organic fertilizers so you have to use about 1 pound for every 4 or 5 square feet. Compost and aged manure improve the composition of the soil as well as the fertility.`,

          filipino:
            'Ang mga organikong pataba tulad ng compost at nabubulok na pataba ay gumagawa ng mahusay na pataba para sa mga melon. Ang mga elemento ay hindi puro sa mga organikong pataba kaya kailangan mong gumamit ng humigit-kumulang 1 libra para sa bawat 4 o 5 square feet. Ang compost at lumang pataba ay nagpapabuti sa komposisyon ng lupa pati na rin ang pagkamayabong.',
        },
        item4: {
          title: 'Life Span',
          english:
            'About 2 to 3 melons can be obtained per plant in its single lifespan of 3-4 months. Usually, gardeners purposely keep only one watermelon per plant to harvest big sized fruits.',

          filipino:
            'Humigit-kumulang 2 hanggang 3 melon ang maaaring makuha bawat halaman sa isang habang-buhay nitong 3-4 na buwan. Karaniwan, ang mga hardinero ay sadyang nag-iingat lamang ng isang pakwan bawat halaman upang mag-ani ng malalaking prutas.',
        },
        item5: {
          title: 'Level of Difficulty of Planting',
          english:
            'Melons are closely related to cucumbers and require similar growing conditions to thrive. To grow them successfully you need to provide them with warmth, water and food. They can be quite vigorous, so regular pruning is needed to keep them under control. Each plant should produce two to four melons.',

          filipino:
            'Ang mga melon ay malapit na nauugnay sa mga pipino at nangangailangan ng katulad na mga kondisyon ng paglaki upang umunlad. Upang matagumpay na mapalago ang mga ito kailangan mong bigyan sila ng init, tubig at pagkain. Maaari silang maging masigla, kaya kailangan ang regular na pruning upang mapanatili silang kontrolado. Ang bawat halaman ay dapat gumawa ng dalawa hanggang apat na melon.',
        },
        item6: {
          title: 'Tips to have a good harvest',
          english:
            'Melons will not all ripen at the same time, so plan to pick them as they become ready.\nMelon seed germination is best between 70°F and 90°F.\nPlant only after the soil temperature has reached 65°F, when nights as well as days are warm.\nPlanting in cooler soil can lead to soil-borne root diseases, which can stunt or kill melon plants, and the plants will grow slowly even if they do not show signs of disease.\nIn the southern half of Minnesota, most soils are not usually warm enough to plant melons until after May 20.',

          filipino:
            'Hindi lahat ng melon ay mahinog nang sabay-sabay, kaya planuhin na kunin ang mga ito kapag handa na sila.\nPinakamainam ang pagtubo ng buto ng melon sa pagitan ng 70°F at 90°F.\nMagtanim lamang pagkatapos umabot sa 65°F ang temperatura ng lupa, kapag mainit ang mga gabi pati na rin ang mga araw.\nAng pagtatanim sa mas malalamig na lupa ay maaaring humantong sa mga sakit sa ugat na dala ng lupa, na maaaring makabagal o pumatay ng mga halaman ng melon, at ang mga halaman ay dahan-dahang tumubo kahit na hindi nagpapakita ng mga palatandaan ng sakit.\nSa katimugang kalahati ng Minnesota, karamihan sa mga lupa ay karaniwang hindi sapat ang init upang magtanim ng mga melon hanggang pagkatapos ng Mayo 20.',
        },
      },
      {
        id: 3,
        name: 'banana',
        type: 'crops',
        img: 'assets/img/home/crops/banana2.png',
        icon: 'assets/img/details/crops/banana/icon.png',
        images: {
          descriptionImg: 'assets/img/details/crops/banana/image.png',
        },
        item1: {
          title: 'Description',
          english:
            'Banana is an elongated, edible fruit - botanically a berry. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow upward in clusters near the top of the plant.',

          filipino:
            'Ang saging ay isang pinahaba, nakakain na prutas - ayon sa botanika ay isang berry. Sa ilang mga bansa, ang mga saging na ginagamit para sa pagluluto ay maaaring tawaging "plantain", na nagpapakilala sa kanila mula sa mga dessert na saging. Ang prutas ay pabagu-bago sa laki, kulay, at katigasan, ngunit kadalasan ay pahaba at hubog, na may malambot na laman na mayaman sa almirol na natatakpan ng balat, na maaaring berde, dilaw, pula, lila, o kayumanggi kapag hinog na. Ang mga prutas ay lumalaki paitaas sa mga kumpol malapit sa tuktok ng halaman.',
        },
        item2: {
          title: 'Best Time to Plant',
          english:
            'Banana can be planted throughout the year except in severe winter and during heavy rains when the soil remains very wet.\nThe ideal time (October-November) of planting is after the monsoon season.\nWith assured irrigation, the planting can also be done in February-March.\nPlant population depends on cultivars, topography and soil fertility.',

          filipino:
            'Ang saging ay maaaring itanim sa buong taon maliban sa matinding taglamig at sa panahon ng malakas na pag-ulan kapag ang lupa ay nananatiling basang-basa.\nAng pinakamainam na oras (Oktubre-Nobyembre) ng pagtatanim ay pagkatapos ng tag-ulan.\nWith assured irrigation, ang pagtatanim ay maaari ding gawin sa Pebrero-Marso.\nAng populasyon ng halaman ay nakasalalay sa mga cultivar, topograpiya at pagkamayabong ng lupa.',
        },
        item3: {
          title: 'Fertilizers Needed',
          english: `Like many other plants, banana fertilizer requirements include nitrogen, phosphorus, and potassium. You may choose to use a balanced fertilizer on a regular basis that contains all of the micro and secondary nutrients the plant needs or divide feedings according to the plant's growing needs.`,

          filipino:
            'Tulad ng maraming iba pang mga halaman, ang mga kinakailangan sa pataba ng saging ay kinabibilangan ng nitrogen, phosphorus, at potassium. Maaari mong piliing gumamit ng balanseng pataba sa regular na batayan na naglalaman ng lahat ng micro at pangalawang sustansya na kailangan ng halaman o hatiin ang mga pagpapakain ayon sa lumalaking pangangailangan ng halaman. ',
        },
        item4: {
          title: 'Life Span',
          english:
            'Each pseudostem produces a single bunch of bananas, before dying and being replaced by a new pseudostem. The base of the plant is a rhizome (known as a corm). Corms are perennial, with a productive lifespan of 15 years or more.',

          filipino:
            'Ang bawat pseudostem ay gumagawa ng isang bungkos ng saging, bago mamatay at mapalitan ng bagong pseudostem. Ang base ng halaman ay isang rhizome (kilala bilang isang corm). Ang mga corm ay pangmatagalan, na may produktibong habang-buhay na 15 taon o higit pa.',
        },
        item5: {
          title: 'Level of Difficulty of Planting',
          english:
            'The majority of bananas are not hardy and are susceptible to even a light freeze. Extreme cold damage results in the dieback of the crown. Leaves will also naturally shed in exposed areas, an adaptation to tropical storms.',

          filipino:
            'Ang karamihan ng mga saging ay hindi matibay at madaling kapitan ng kahit isang light freeze. Ang matinding lamig na pinsala ay nagreresulta sa pagkamatay ng korona. Ang mga dahon ay natural ding malaglag sa mga nakalantad na lugar, isang adaptasyon sa mga tropikal na bagyo.',
        },
        item6: {
          title: 'Tips to have a good harvest',
          english:
            'Mature bananas are not harvested when they are yellow but while they are still green.\nAs the fruit matures the fingers get fatter but stay green.\nAbout 4-6 weeks after the fingers have stop growing you can harvest your fruit.\nBananas are ready to pick when they look well rounded between the ribs and the little flowers at the end are dry and rub off easily.\nIt is best to cut off the whole stalk of bananas. Hang your stalk of bananas in a shady spot to finish ripening.\nThey usually ripen from the top to the bottom going from green to yellow.',

          filipino:
            'Ang mga mature na saging ay hindi inaani kapag dilaw ngunit habang ito ay berde pa.\nHabang tumataba ang prutas, tumataba ang mga daliri ngunit nananatiling berde.\nMga 4-6 na linggo pagkatapos huminto ang paglaki ng mga daliri maaari mong anihin ang iyong prutas.\nAng mga saging ay handang mamitas kapag sila ay mukhang mahusay na bilugan sa pagitan ng mga buto-buto at ang mga maliliit na bulaklak sa dulo ay tuyo at madaling kuskusin.\nPinakamabuting putulin ang buong tangkay ng saging. Isabit ang iyong tangkay ng saging sa isang makulimlim na lugar upang matapos ang paghinog.\nSila ay karaniwang hinog mula sa itaas hanggang sa ibaba mula berde hanggang dilaw.',
        },
      },
      {
        id: 4,
        name: 'palay',
        type: 'crops',
        img: 'assets/img/home/crops/palay2.png',
        icon: 'assets/img/details/crops/palay/icon.png',
        images: {
          descriptionImg: 'assets/img/details/crops/palay/image.png',
        },
        item1: {
          title: 'Description',
          english:
            'Rice is an edible starchy cereal grain and the grass plant by which it is produced. The cultivated rice plant is an annual grass and grows to about 1.2 metres (4 feet) in height. The leaves are long and flattened and are borne on hollow stems. The fibrous root system is often broad and spreading. Varieties differ greatly in the length, shape, and weight of the panicle and the overall productivity of a given plant.',

          filipino:
            'Ang bigas ay isang nakakain na butil ng starchy na cereal at ang halamang damo kung saan ito ginagawa. Ang tanim na palay ay isang taunang damo at umabot sa mga 1.2 metro (4 na talampakan) ang taas. Ang mga dahon ay mahaba at pipi at nadadala sa mga guwang na tangkay. Ang fibrous root system ay kadalasang malawak at kumakalat. Malaki ang pagkakaiba ng mga varieties sa haba, hugis, at bigat ng panicle at sa kabuuang produktibidad ng isang partikular na halaman.',
        },
        item2: {
          title: 'Best Time to Plant',
          english:
            'Planting in early June, ensures that much of the light during the longest days of the year will not be captured. harvest is delayed substantially. Therefore, we suggest planting early - provided a good seedbed has been prepared, temperatures are conducive to rice growth, and water is available.',

          filipino: `Ang pagtatanim sa unang bahagi ng Hunyo, ay tinitiyak na ang karamihan sa liwanag sa pinakamahabang araw ng taon ay hindi makukuha. ang pag-aani ay naantala nang husto. Kaya naman, iminumungkahi namin ang pagtatanim ng maaga - basta't naihanda ang magandang punlaan, ang mga temperatura ay nakakatulong sa paglaki ng palay, at may magagamit na tubig.`,
        },
        item3: {
          title: 'Fertilizers Needed',
          english:
            'Bonus™+Zn are fast acting because they are absorbed right at the site where they are used.\nSpray volume: 350-400 L/ha\nApplication rate: 8.8 - 10.0 kg/ha (2.5%)\nApplications timing:  1st:  at peak tillering ; 2nd at heading ; 3rd at milky stage.\nControl, treated with water\nHaifa Bonus 19-19-19 + TE\nHaifa Bonus 15-15-30 + TE',

          filipino:
            'Ang Bonus™+Zn ay mabilis na kumikilos dahil na-absorb ang mga ito sa mismong site kung saan ginagamit ang mga ito.\nDami ng pag-spray: 350-400 L/ha\nRate ng aplikasyon: 8.8 - 10.0 kg/ha (2.5%)\nTiming ng mga aplikasyon: 1st: at peak tillering ; 2nd sa heading ; 3rd sa milky stage.\nKontrolin, ginagamot sa tubig\nHaifa Bonus 19-19-19 + TE\nHaifa Bonus 15-15-30 + TE',
        },
        item4: {
          title: 'Life Span',
          english:
            'Generally, the ideal harvest time lies between 130 and 136 days after sowing for late, 113 and 125 for medium, and 110 days for early-maturing varieties. For dry season harvesting, an optimum time is 28 to 35 days after heading. In wet season harvest, optimum time is 32 to 38 days after heading.',

          filipino:
            'Sa pangkalahatan, ang pinakamainam na oras ng pag-aani ay nasa pagitan ng 130 at 136 araw pagkatapos ng paghahasik para sa huli, 113 at 125 para sa medium, at 110 araw para sa maagang-pagkahinog na mga varieties. Para sa pag-aani ng dry season, ang pinakamabuting oras ay 28 hanggang 35 araw pagkatapos ng heading. Sa pag-aani ng tag-ulan, ang pinakamainam na oras ay 32 hanggang 38 araw pagkatapos ng heading.',
        },
        item5: {
          title: 'Level of Difficulty of Planting',
          english:
            'In terms of production related problems the findings showed that farmers perceived high price of fertilizer, shortage of canal water, high price of agricultural input, high rent charges of agricultural machinery, lack of consultancy facilities and lack of credit/finance as the major problems during the rice crop.',

          filipino:
            'Sa mga tuntunin ng mga problemang nauugnay sa produksiyon, ipinakita ng mga natuklasan na ang mga magsasaka ay napapansin ang mataas na presyo ng pataba, kakulangan ng tubig sa kanal, mataas na presyo ng input sa agrikultura, mataas na singil sa renta ng makinarya sa agrikultura, kakulangan ng mga pasilidad sa pagkonsulta at kawalan ng kredito/pinansya bilang mga pangunahing problema sa panahon ng ang pananim ng palay.',
        },
        item6: {
          title: 'Tips to have a good harvest',
          english:
            'Transplantation is the most commonly used method wherein seeds are first sown in nursery and the seedlings are transplanted to the main field once they show 3-4 leaves. Although this is the best yielding method, it requires heavy labor.\n          Soils with good water retention capacity with high amount of clay and organic matter are ideal for rice cultivation. Clay or clay loams are most suited for rice cultivation. Such soils are capable of holding water for long and sustain crop.\nHarvest at the right time with the right moisture content.\nAvoid delays in threshing after harvesting.\nUse proper machine settings when using a threshing machine.\nClean the grains properly after threshing.\nClean the grains properly after threshing.',

          filipino:
            'Ang paglipat ay ang pinakakaraniwang ginagamit na paraan kung saan ang mga buto ay unang inihasik sa nursery at ang mga punla ay inililipat sa pangunahing patlang kapag sila ay nagpakita ng 3-4 na dahon. Bagaman ito ang pinakamahusay na paraan ng pagbubunga, nangangailangan ito ng mabigat na paggawa.\n          Ang mga lupang may mahusay na kapasidad sa pagpapanatili ng tubig na may mataas na dami ng luad at organikong bagay ay mainam para sa pagtatanim ng palay. Ang clay o clay loams ay pinakaangkop para sa paglilinang ng palay. Ang ganitong mga lupa ay may kakayahang humawak ng tubig nang matagal at nagpapanatili ng pananim.\nMag-ani sa tamang oras na may tamang moisture content.\nGumamit ng wastong setting ng makina kapag gumagamit ng makinang panggiik.\nLinisin nang maayos ang mga butil pagkatapos ng paggiik.\nPatuyuin kaagad ang mga butil pagkatapos ng paggiik.',
        },
      },
      {
        id: 5,
        name: 'eggplant',
        type: 'crops',
        img: 'assets/img/home/crops/eggplant2.png',
        icon: 'assets/img/details/crops/eggplant/icon.png',
        images: {
          descriptionImg: 'assets/img/details/crops/eggplant/image.png',
        },
        item1: {
          title: 'Description',
          english:
            'Filipino eggplants are long, slender, and cylindrical and can be straight or slightly curved. The outer skin is smooth and violet with green hues at the stem and blossom end. The inner flesh is plump and creamy white with a few, edible seeds. The fruit contains trigonelline, choline, vitamins A. B, and C, fats, protein, and the minerals calcium, phosphorus, and iron.',

          filipino:
            'Ang mga talong ay mahaba, payat, at cylindrical at maaaring tuwid o bahagyang hubog. Ang panlabas na balat ay makinis at violet na may berdeng kulay sa tangkay at dulo ng pamumulaklak. Ang panloob na laman ay mabilog at creamy white na may kaunti, nakakain na buto. Ang prutas ay naglalaman ng trigonelline, choline, bitamina A. B, at C, taba, protina, at mga mineral na calcium, phosphorus, at iron.',
        },
        item2: {
          title: 'Best Time to Plant',
          english:
            'First planting is usually done in October to February; second planting in May to September. Eggplant grows best in sandy loam to clay loam soils. Eggplant can be grown in a deep fertile and well drained, silt loam to clay loam, with a pH range of 5.5 - 6.5.',

          filipino:
            'Ang unang pagtatanim ay karaniwang ginagawa sa Oktubre hanggang Pebrero; ikalawang pagtatanim noong Mayo hanggang Setyembre. Pinakamahusay na tumutubo ang talong sa sandy loam hanggang clay loam soils. Ang talong ay maaaring itanim sa isang malalim na mayabong at mahusay na pinatuyo, silt loam hanggang clay loam, na may pH range na 5.5 - 6.5.',
        },
        item3: {
          title: 'Fertilizers Needed',
          english:
            'Periodic eggplant feeding during the growing season also helps these heavy feeders with setting and producing fruit. A balanced fertilizer (10-10-10) is often recommended for eggplant.',

          filipino:
            'Ang pana-panahong pagpapakain ng talong sa panahon ng lumalagong panahon ay nakakatulong din sa mga mabibigat na feeder na ito sa pagtatakda at paggawa ng prutas. Ang isang balanseng pataba (10-10-10) ay madalas na inirerekomenda para sa talong.',
        },
        item4: {
          title: 'Life Span',
          english:
            'Eggplant grows as perennial plant (life span: over 2 years) in tropics and as annual plant (life span: one year) in temperate climates.',

          filipino:
            'Lumalaki ang talong bilang halamang pangmatagalan (life span: mahigit 2 taon) sa tropiko at bilang taunang halaman (life span: isang taon) sa mga mapagtimpi na klima.',
        },
        item5: {
          title: 'Level of Difficulty of Planting',
          english:
            'There are several eggplant diseases that affect these crops. Some of the most common include blossom end rot, wilt diseases, and various types of blight. Many of these eggplant diseases can be eliminated or prevented by practicing crop rotation, reducing weed growth, and providing adequate spacing and uniform watering.',

          filipino: `Mayroong ilang mga sakit sa talong na nakakaapekto sa mga pananim na ito. Ang ilan sa mga pinakakaraniwan ay kinabibilangan ng blossom end rot, mga sakit sa pagkalanta, at iba't ibang uri ng blight. Marami sa mga sakit na ito sa talong ay maaaring maalis o maiwasan sa pamamagitan ng pagsasagawa ng crop rotation, pagbabawas ng paglaki ng damo, at pagbibigay ng sapat na espasyo at pare-parehong pagtutubig.`,
        },
        item6: {
          title: 'Tips to have a good harvest',
          english:
            'Protect them from excessive or too much sunlight\nApply fertilizers to the plants.\nYou can also prune the plants to remove excess leaves.\nHarvest it when they are still young.\nAlso consider watering the plant consistently and moderately.\nImmediately remove and destroy any infected crop.\nUse of insecticides can also help to curb the spread of disease.',

          filipino:
            'Protektahan ang mga ito mula sa labis o sobrang sikat ng araw.\nLagyan ng pataba ang mga halaman.\nMaaari mo ring putulin ang mga halaman upang maalis ang labis na dahon.\nAnihin ito noong bata pa sila.\nIsaalang-alang din ang pagdidilig sa halaman nang pare-pareho at katamtaman.\nAgad na alisin at sirain ang anumang nahawaang pananim.\nAng paggamit ng pamatay-insekto ay makakatulong din para mapigilan ang pagkalat ng sakit.',
        },
      },
      {
        id: 6,
        name: 'beans',
        type: 'crops',
        img: 'assets/img/home/crops/sitaw.png',
        icon: 'assets/img/details/crops/beans/icon.png',
        images: {
          descriptionImg: 'assets/img/details/crops/beans/image.png',
        },
        item1: {
          title: 'Description',
          english:
            'Sitaw is an herbaceous climbing plant grown for it strikingly long edible pods. Leaves are trifoliate,\ngreen, oval and smooth-edged. Flowers are purplish, about 1.5 centimeters long, giving out green and slender yardlong pods.',

          filipino:
            'Ang Sitaw ay isang mala-damo na akyat na halaman na pinatubo para dito na kapansin-pansing mahaba ang nakakain na mga pod. Ang mga dahon ay trifoliate, berde, hugis-itlog at makinis ang talim. Ang mga bulaklak ay purplish, humigit-kumulang 1.5 sentimetro ang haba, na nagbibigay ng berde at payat na yarda na mga pod.',
        },
        item2: {
          title: 'Best Time to Plant',
          english:
            'Sitaw is well suited in warm climate at a temperature range of 20-35oC. It can thrive well under full sunlight although it can tolerate partial shading. Higher percentage of pod set can be achieved when planted in May for wet season and in October-November for dry season.',

          filipino:
            'Ang sitaw ay angkop na angkop sa mainit na klima sa hanay ng temperatura na 20-35oC. Maaari itong umunlad nang maayos sa ilalim ng buong sikat ng araw bagaman maaari nitong tiisin ang bahagyang pagtatabing. Maaaring makamit ang mas mataas na porsyento ng pod set kapag itinanim sa Mayo para sa tag-ulan at sa Oktubre-Nobyembre para sa tagtuyot.',
        },
        item3: {
          title: 'Fertilizers Needed',
          english:
            'Sitaw is well suited in warm climate at a temperature range of 20-35oC. It can thrive well under full sunlight although it can tolerate partial shading. Higher percentage of pod set can be achieved when planted in May for wet season and in October-November for dry season.',

          filipino:
            'Ang rate ng seeding para sa pole sitao ay nangangailangan ng 10-12 kg/ha. Para sa paraan ng pagtatanim ng burol, pagkatapos ng basal fertilization na may organic at/o inorganic fertilizers, maghasik ng 2-3 buto bawat burol na may distansyang 30 cm sa pagitan ng mga burol at bahagyang takpan ng lupa. Magbigay lamang ng 2 halaman sa bawat burol.',
        },
        item4: {
          title: 'Life Span',
          english:
            'Sitaw plant lasts one year and is active from late spring until the temperatures begin to drop in the fall.',

          filipino:
            'Ang halaman ng Sitaw ay tumatagal ng isang taon at aktibo mula sa huling bahagi ng tagsibol hanggang sa magsimulang bumaba ang temperatura sa taglagas.',
        },
        item5: {
          title: 'Level of Difficulty of Planting',
          english:
            'Sitaw grow well in lowland areas with temperature range of 35’C. It can manage to grow in the areas with low and high distribution of rainfall. The only problem is that the plant is disadvantageous during water-logging and dry season.',

          filipino:
            'Sitaw grow well in lowland areas with temperature range of 35’C. It can manage to grow in the areas with low and high distribution of rainfall. The only problem is that the plant is disadvantageous during water-logging and dry season.',
        },
        item6: {
          title: 'Tips to have a good harvest',
          english:
            'best grown in areas with a temperature of 20 degrees Celsius to 35 degrees Celsius\nPlant 2-3 seeds at a depth of 3 centimeters on each hill with a spacing of 60-80 centimeters in each furrow with a spacing of one meter\nIt can also be grown in any type of soil as long as it has a pH level of 5.5 to 6.6\nApply fertilizers to the plants.\nWater it Everyday This vegetable needs more water so  that it will grow faster and easier.\nRemove any unwanted grass during the first 30 days after planting to keep the sitaw from competing with each other for sunlight and nutrition in the soil.',

          filipino: `pinakamahusay na lumaki sa mga lugar na may temperaturang 20 degrees Celsius hanggang 35 degrees Celsius\nMagtanim ng 2-3 buto sa lalim na 3 sentimetro sa bawat burol na may pagitan na 60-80 sentimetro sa bawat tudling na may pagitan na isang metro.\nMaaari din itong itanim sa anumang uri ng lupa basta't mayroon itong pH level na 5.5 hanggang 6.6\nLagyan ng pataba ang mga halaman.\nDiligan ito araw araw. Ang gulay na ito ay nangangailangan ng mas maraming tubig upang ito ay lumago nang mas mabilis at mas madali.\nAlisin ang anumang hindi gustong damo sa loob ng unang 30 araw pagkatapos ng pagtatanim upang maiwasang makipagkumpitensya ang sitaw sa isa't isa para sa sikat ng araw at nutrisyon sa lupa.`,
        },
      },
    ];
  }

  getCropsData() {
    return [...this._cropsData];
  }

  getCropByName(cropName) {
    return { ...this._cropsData.find((data) => data.name === cropName) };
  }

  getCropsColors() {
    return this.cropsColors;
  }
  getCropsColor(cropName) {
    return this.cropsColors[cropName];
  }
  getCropData(cropId) {
    return { ...this._cropsData.find((data) => 'crop' + data.id === cropId) };
  }
}
