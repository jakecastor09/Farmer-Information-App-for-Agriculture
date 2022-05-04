export class Crops {
  constructor(
    public id: number,

    public name: string,
    public image: string,
    public description: string,
    public bestTimeToPlant: Array<{ bestTimeToPlant: string }>,
    public tips: Array<{ tips: string }>
  ) {}
}
