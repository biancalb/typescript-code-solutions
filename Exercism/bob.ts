export function hey(message: string): void {
    let answer: string = '';
    message = message.trim();

    let isQuestion: boolean = message.endsWith('?');

    let arr: Array<string> = Array.from(message);

    let letters: Array<string> = arr.filter(c => c.toLowerCase() !== c.toUpperCase());    
    let allUpper: boolean = letters.length > 0 && letters.every(c => c === c.toUpperCase()); 

    let silence: boolean = arr.length > 0 && arr.every(c => c == ' ');
    
    console.log('isQuestion= ' + isQuestion)
    console.log('allUpper= ' + allUpper)
    console.log('silence= ' + silence)

    if(silence)
    {
        answer = 'Fine. Be that way!';
    }
    else if (allUpper && isQuestion)
    {
        answer = 'Calm down, I know what I\'m doing!';
    } 
    else if (allUpper) {
        answer = 'Whoa, chill out!';
    }
    else if (isQuestion) {
        answer = 'Sure.';
    }
    else {
        answer = 'Whatever.';
    }

    console.log('answer= ' + answer);
}
  