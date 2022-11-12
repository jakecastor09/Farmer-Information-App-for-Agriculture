export class CommunityPost {
  constructor(
    public id: string,
    public message: string,
    public image: Array<string>,
    public comment: Array<string>,
    public userId: string,
    public fullName: string,
    public date: Date,
    public userImg: string
  ) {}
}
