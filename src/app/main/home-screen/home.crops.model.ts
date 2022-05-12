export class Crops {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public description: Array<{ description: string }>,
    public bestTimeToPlant: Array<Array<{ bestTimeToPlant: string }>>,
    public fertilizersNeeded: Array<{ fertilizersNeeded: string }>,
    public lifeSpan: Array<{ lifeSpan: string }>,
    public levelOfDiffucltyOfPlanting: Array<{
      levelOfDiffucltyOfPlanting: string;
    }>,
    public tips: Array<Array<{ tips: string }>>
  ) {}
}
