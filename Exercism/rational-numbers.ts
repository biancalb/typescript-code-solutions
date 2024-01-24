type RationalNumber = {
    expNum: number,
    expDen: number,
}

export class Rational {
    public numerator: number;
    public denominator: number;

    constructor(num:number, den: number) {
      this.numerator = num;
      this.denominator = den;
    }
  
    add(rational: Rational): Rational {
        // (a₁ * b₂ + a₂ * b₁) / (b₁ * b₂)
        const sumNum = (this.numerator * rational.denominator + rational.numerator * this.denominator);  
        const sumDen = (this.denominator * rational.denominator);
        return new Rational(sumNum, sumDen);
    }
  
    sub(rational: Rational): Rational {
        // (a₁ * b₂ - a₂ * b₁) / (b₁ * b₂)
        const subNum = (this.numerator * rational.denominator - rational.numerator * this.denominator);
        const subDen = (this.denominator * rational.denominator);
        return new Rational(subNum, subDen);
    }
  
    mul(rational: Rational): Rational {
        // (a₁ * a₂) / (b₁ * b₂)
        const mulNum = (this.numerator * rational.numerator);
        const mulDen = (this.denominator * rational.denominator);
        return new Rational(mulNum, mulDen);
    }
  
    div(rational: Rational): Rational {
        // (a₁ * b₂) / (a₂ * b₁)
        if (rational.numerator !== 0) {
            const mulNum = (this.numerator * rational.denominator);
            const mulDen = (this.numerator * this.denominator);
            return new Rational(mulNum, mulDen);
        } 
        else {
            return new Rational(0, 0);
        }
    }
  
    abs(): Rational {
        return new Rational (Math.abs(this.numerator), Math.abs(this.denominator));
    }
  
    exprational(n: number): Rational {
        let expNum: number; 
        let expDen: number;

        if (Number.isInteger(n)) {
            if (n > 0) {
                // (a^n)/(b^n)
                expNum = Math.pow(this.numerator, n);
                expDen = Math.pow(this.denominator, n);
            }
            else if ( n < 0) {
                // (b^m)/(a^m)
                const m = Math.abs(n);
                expNum = Math.pow(this.denominator, m);
                expDen = Math.pow(this.numerator, m);
            } 
            else {
                expNum = 1;
                expDen = 1;
            }
        } 
        else {
            // (a^x)/(b^x)
            let realNumber = Math.pow(this.numerator, n) / Math.pow(this.denominator, n);
            const racionalNumber = this.toRacionalNumber(realNumber);
            expNum = racionalNumber.expNum;
            expDen = racionalNumber.expDen;
        }
        
        return new Rational(expNum, expDen);
    }
  
    expreal(x: number): number {
        // x^(a/b) = root(x^a, b)
        let realNumber = Math.pow(x, this.numerator/this.denominator);
        return realNumber;
    }
  
    reduce() {
      throw new Error('Remove this statement and implement this function')
    }

    toRacionalNumber(realNumber: number): RationalNumber {
        let n: RationalNumber = {
            expNum: realNumber,
            expDen: 1
        };

        while (!Number.isInteger(n.expNum)) {
            n.expNum *= 10;
            n.expDen *= 10;
        }; 
        
        return n;
    }
  }
  