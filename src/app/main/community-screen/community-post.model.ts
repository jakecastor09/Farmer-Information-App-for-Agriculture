export class CommunityPost {
  constructor(
    public key: string,
    public postId: string,
    public message: string,
    public image: Array<string>,
    public comment: Array<object>,
    public userId: string,
    public fullName: string,
    public date: Date,
    public userImg: string
  ) {}
}
