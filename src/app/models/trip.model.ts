export class TripModel {
  constructor(
    public id: string,
    public user: string,
    public name: string,
    public startDate: Date,
    public endDate: Date
  ) {}
}
