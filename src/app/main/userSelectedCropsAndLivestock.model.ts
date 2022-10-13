export class UserSelectedCropsAndLivestock {
  constructor(
    public userId: string,
    public id: string,
    public crops: Array<string>,
    public livestock: Array<string>
  ) {}
}
