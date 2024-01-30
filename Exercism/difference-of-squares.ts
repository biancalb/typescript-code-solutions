export class Squares {
    private count: number;
    private sum: number;
    private square: number;

    constructor(count: number) {
        this.count = count;
        this.sum = 0;
        this.square = 0;
    }
    
    get sumOfSquares(): number {
        for (let n = 1; n <= this.count; n++) {
            this.square += Math.pow(n, 2);
        }
        return this.square;
    }
    
    get squareOfSum(): number {
        for (let n = 1; n <= this.count; n++) {
            this.sum += n;
        }
        this.sum = Math.pow(this.sum, 2)
        return this.sum;
    }
  
    get difference(): number {
      return Math.abs(this.square - this.sum);
    }
  }
  