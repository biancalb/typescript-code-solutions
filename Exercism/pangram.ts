export function isPangram(str: string) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));

    const chars = Array.from(str).filter(c => c != ' ').map(c => { return c.toUpperCase()});
    let isPangram: boolean = alphabet.every(l => chars.includes(l));
    
    console.log(isPangram);
}
