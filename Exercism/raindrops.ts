export function convert(num: number) {
    let result: string = '';

    if(num % 3 == 0) result += 'Pling'
    if(num % 5 == 0) result += 'Plang'
    if(num % 5 == 0) result += 'Plong'
    if(result == '') result = num.toString();

    console.log('result= ' + result);
    return result;
}
  