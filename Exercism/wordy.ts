enum ValueType {
    Number,
    MathOperation
}

type WordyElement = {
    value: string,
    index: number
    type: ValueType
}

const operations = ['plus', 'minus', 'multiplied by', 'divided by']
export const answer = (question: string) => {
    let regex = /[-+]?\d+/g;
    let matchNumbers = question.matchAll(regex)|| [];
    let elements: Array<WordyElement> = []

    Array.from(matchNumbers).forEach(element => {
        elements.push({
            value: element.toString(),
            index: parseInt(element.index?.toString() || "-1"),
            type: ValueType.Number
        })
    });

    const elementsCopy = [...elements];
    for (let i = 0; i < elementsCopy.length - 1; i++) {
        const element = elementsCopy[i];
        const nextElement = elementsCopy[i+1];

        const opIndex = element.index + element.value.length + 1;
        const operation = question.slice(opIndex, nextElement.index).trim();
        
        elements.push({
            value: operation,
            index: opIndex,
            type: ValueType.MathOperation
        })         
    }    
    
    console.log(elements)
    elements = sortArray(elements)
    console.log(elements)

    let number = 0;
    let result = 0;
    let op: string | null;

    elements.map(el => {
        console.log('el= ' + el.value)
        if(Number.isInteger(Number.parseInt(el.value))){
            number = Number.parseInt(el.value);
            result = Calculate (result, number, op);
        }
        else {
            op = el.value
        }
        
        console.log('result= ' + result)
        console.log('\n')
    });

    console.log(result)
}

function sortArray(arr: Array<WordyElement>) {
    return arr.sort((n1,n2) => {
        if (n1.index > n2.index) {
            return 1;
        }
        
        if (n1.index < n2.index) {
            return -1;
        }
        
        return 0;
    });
}

function Calculate(result: number, num: number, op: string | null = null): number {
    switch (op) {
        case 'plus':
            result += num;
            break;
            
        case 'minus':
            result -= num;
            break;
                
        case 'multiplied by':
            result *= num;
            break;
    
        case 'divided by':
            result = num !== 0 ? result / num : 0;
            break;
    
        default:
            result = num;
            break;
    }
    return result;
}

