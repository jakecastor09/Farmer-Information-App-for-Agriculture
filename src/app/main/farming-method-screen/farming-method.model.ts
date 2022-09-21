export class FarmingMethod {
  constructor(
    public userId: string,
    public farmingMethodId: string,
    public name: string,
    public hectares: number,
    public methods: Array<object>,
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
