export class Clock {
    private DateTime = new Date();

    constructor(hour: number, minute?: number) { 
        this.DateTime.setHours(hour, minute || 0);
    }
  
    public toString(): string {
        let hours: string = this.DateTime.getHours().toString().padStart(2, '0');
        let min: string = this.DateTime.getMinutes().toString().padStart(2, '0');

        return `${hours}:${min}`;
    }
  
    public plus(minutes: number): Clock {
        let d = this.DateTime;
        d.setMinutes(this.DateTime.getMinutes() + minutes);
        return new Clock(d.getHours(), d.getMinutes());
    }
  
    public minus(minutes: number): Clock {
        let d = this.DateTime;
        d.setMinutes(this.DateTime.getMinutes() - minutes);
        return new Clock(d.getHours(), d.getMinutes());
    }
  
    public equals(clock2: Clock): boolean {
        return this.toString() === clock2.toString();
    }
  }
  