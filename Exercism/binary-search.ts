export function find(haystack: Array<number>, needle: number): number | never {
    if(!haystack) new Error('Value not in array');

    haystack.sort(function(a, b){return a - b});
    console.log('sorted haystack= ' + haystack)
    
    let foundItem: number | Array<number> = [...haystack];

    while(!(typeof foundItem === "number")) {
        if (!foundItem) new Error('Value not in array');
        
        foundItem = splitArr(foundItem, needle);
    }

    console.log('found item= ' + foundItem);
    return foundItem;
}

function splitArr(arr:Array<number>, needle:number) {

    const medianIndex = findMedianIndex(arr);
    console.log('-------------');
    console.log('medianIndex= ' + medianIndex);
    
    if (arr[medianIndex] == needle) 
    {
        console.log('found= ' + arr[medianIndex])
        return medianIndex;
    }
    else if (arr[medianIndex] < needle){
        let eliminatedArr = arr.slice(medianIndex + 1, arr.length);
        console.log('eliminatedArr > = ' + eliminatedArr);
        return eliminatedArr;
        // splitArr(eliminatedArr, needle);
        
    } else {
        let eliminatedArr = arr.slice(0, medianIndex)
        console.log('eliminatedArr < = ' + eliminatedArr)
        return eliminatedArr;
        // splitArr(eliminatedArr, needle);
    }
}

function findMedianIndex(arr:Array<number>): number {
    if (arr.length % 2 != 0){
        const medianIndex = Math.trunc(arr.length/2);
        return medianIndex;

    } else {
        throw new Error('Not implemented')
    }
}