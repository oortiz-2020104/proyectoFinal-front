export class TuristicCenterModel {
  constructor(
    public id: string,
    public user: string,
    public name: string,
    public description: string,
    public price: Number,
    public popularity: Number,
    public link: string,
    public department: string,
    public category: string
  ) {}
}
