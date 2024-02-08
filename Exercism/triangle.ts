export class Triangle {
    private sides: number[];

    
    constructor(...sides: number[]) {   //rest parameter - Use spread to catch every arguments...
        this.sides = [...sides];
    }
  
    get isEquilateral() {
        return this.isValid() && this.checkEquals() == 2;
    }
    
    get isIsosceles() {;
        return this.isValid() && this.checkEquals() >= 1;
    }
  
    get isScalene() {
      return this.isValid() && this.checkEquals() == 0;
    }

    private checkEquals(): number {
        let count = 0;
        for (let i = 0; i < this.sides.length; i++) { 
            if (this.sides.indexOf(this.sides[i]) !== i) { 
                count++; 
            } 
        } 
        return count;
    } 
    private isValid(): boolean {
        if (this.sides.length != 3 || this.sides.some(s => s == 0)) {
            return false;
        }

        let [ a, b, c ] = this.sides;
        
        const exp1 = a + b >= c;
        const exp2 = b + c >= a;
        const exp3 = a + c >= b;

        if (!(exp1 && exp2 && exp3)) return false;

        return true;
    }
  }
  