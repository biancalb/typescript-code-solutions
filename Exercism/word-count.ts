export function countWords(subtitle: string) {
   
    let words = subtitle.match(/\w+('\w+)?/g);
    
    type ReduceReturnType = Record<string, number>;
    
    let  lowerWords = words?.map(w => { return w.toLowerCase()})
    
    const result = lowerWords?.reduce<ReduceReturnType>(
        (accumulator, current) => {          
          accumulator[current] = setValue(accumulator[current]);

          return { ...accumulator, [current]: accumulator[current]+= 1 };
        },
        {}, 
      );

    console.log(new Map(Object.entries({...result})));
}

function setValue(value: number | undefined): number {
    value = value || 0;
    if( value.toString().indexOf('[native code]') > -1 ) {
        value = 0;
    }
    return value;
}