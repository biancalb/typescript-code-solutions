export function countWords(subtitle: string) {
   
    let words = subtitle.match(/\w+('\w+)?/g);
    
    type ReduceReturnType = Record<string, number>;
    
    let  lowerWords = words?.map(w => { return w.toLowerCase()})
    
    const result = lowerWords?.reduce<ReduceReturnType>(
        (accumulator, current) => {
          accumulator[current] = accumulator[current] || 0;
          return { ...accumulator, [current]: accumulator[current]+= 1 };
        },
        {}, 
      );

    console.log(new Map(Object.entries({...result})));
}