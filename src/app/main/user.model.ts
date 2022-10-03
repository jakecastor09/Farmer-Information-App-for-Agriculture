export class User {
  constructor(
    public id: string,
    public userId: string,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public age: number,
    public birthday: Date,
    public email: string,
    public purok: number
  ) {}
}
