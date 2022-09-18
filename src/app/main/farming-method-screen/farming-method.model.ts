export class FarmingMethod {
  constructor(
    public userId: string,
    public name: string,
    public hectares: number,
    public method: Array<object>,
    public date: Date
  ) {}
}

// example data
// method: [
//   {
//     title: '2 kilo of kamatis',
//     message: 'lorem ipsum',
//     img: 'asdfd',
//   },
//   {
//     title: '2 kilo of kamatis',
//     message: 'lorem ipsum',
//   },
// ];
