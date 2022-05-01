export class Home {
  constructor(
    public id: string,
    public type: string,
    public name: string,
    public image: string,
    public description: string,
    public bestTimeToPlant: Array<{ text: string }>,
    public tips: Array<{ text: string }>
  ) {}
}
