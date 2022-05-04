export class Livestock {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public description: string,
    public bestWayToRaise: Array<{ bestWayToRaise: string }>,
    public tips: Array<{ tips: string }>
  ) {}
}
