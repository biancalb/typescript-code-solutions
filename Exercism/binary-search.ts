type MyArray = {
    Item: Array<number>,
    Index: number,
    WasFound: boolean
}

export function find(haystack: Array<number>, needle: number): number | never {
    checkValidArray(haystack);

    haystack.sort(function(a, b){return a - b});
    console.log('sorted haystack= ' + haystack)

    let found: MyArray = {
        Item: [...haystack],
        Index: findMedianIndex(haystack),
        WasFound: false
    }
    
    while(!found.WasFound)  {
        found = splitArr(found, needle);
        checkValidArray(found.Item);
    }

    console.log('found item= ' + found.Item);
    console.log('found index= ' + found.Index);

    return found.Index;
}

function splitArr(myArr:MyArray, needle:number): MyArray {
    const arr = myArr.Item;

    const medianIndex = findMedianIndex(arr);
    
    console.log('-------------');
    console.log('medianItem= ' + arr[medianIndex]);
    console.log('medianIndex= ' + medianIndex);
    console.log('foundIndex= ' + myArr.Index);
    
    if (arr[medianIndex] == needle) {
        console.log('found= ' + arr[medianIndex])
        console.log('myArr.Index= ' + myArr.Index)
        myArr.WasFound = true;
        return myArr;
        
    }
    else if (arr[medianIndex] < needle) {
        let eliminatedArr = arr.slice(medianIndex + 1, arr.length);
        myArr.Item = [...eliminatedArr];
        myArr.Index += Math.round(medianIndex / 2);
        console.log('myArr.Index= ' + myArr.Index)
        console.log('myArr.Item > = ' + myArr.Item);
        return myArr;
        
    } else {
        let eliminatedArr = arr.slice(0, medianIndex);
        myArr.Item = [...eliminatedArr];
        myArr.Index -= Math.round(medianIndex / 2);
        console.log('myArr.Index= ' + myArr.Index)
        console.log('myArr.Item < = ' + myArr.Item);
        return myArr;    
    }
}

function findMedianIndex(arr:Array<number>): number {
    if (arr.length % 2 != 0) {
        const medianIndex = Math.trunc(arr.length / 2);
        return medianIndex;

    } else {

        throw new Error('Not implemented')
    }
}

function checkValidArray(arr:Array<number>) {
    if(!arr || arr.length === 0) throw new Error('Value not in array');
}