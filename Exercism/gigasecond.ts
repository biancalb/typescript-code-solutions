export class Gigasecond {
    private myDate: Date;

    constructor (date: Date) {
        this.myDate = date;
    }

    public date() {
        return new Date(this.myDate.getTime() + 1e12)
    }
  }
  