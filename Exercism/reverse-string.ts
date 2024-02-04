export function reverse(str: string) {
    let reversedStr: string = "";
    for (let index = 0; index < str.length; index++) {
        const reversedIndex = str.length - 1 - index;
        reversedStr += str[reversedIndex];      
    }
    return reversedStr;
  }
  