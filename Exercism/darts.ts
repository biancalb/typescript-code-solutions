export function score(x: number, y: number): void {
    let radius: number = Math.sqrt(x**2 + y**2);
    let score: number = 0;

    if (radius <= 1) score = 10;
    else if (radius > 1 && radius <= 5) score = 5;
    else if (radius > 5 && radius <= 10) score = 1;
    
    console.log("score= " + score);
}
  