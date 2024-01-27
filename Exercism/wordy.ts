enum ValueType {
    Operand,
    MathOperation,
}

type WordyElement = {
    value: string;
    index: number;
    type: ValueType;
};

const operations = ['plus', 'minus', 'multiplied by', 'divided by'];
const unSupportedOperations = ['cubed'];

export const answer = (question: string) => {
    let regex = /[-+]?\d+/g;
    let matchNumbers = question.matchAll(regex) || [];
    let elements: Array<WordyElement> = [];

    Array.from(matchNumbers).forEach((element) => {
        elements.push({
            value: element.toString(),
            index: parseInt(element.index?.toString() || '-1'),
            type: ValueType.Operand,
        });
    });

    operations.forEach(op => {
        let startIndex = 0;
        while (startIndex < question.length){
            const opIndex = question.indexOf(op, startIndex);
            if (opIndex !== -1) {
                elements.push({
                    value: op,
                    index: opIndex,
                    type: ValueType.MathOperation,
                });
                startIndex = opIndex + op.length + 1;
            }
            else {
                startIndex = question.length;
            }
        }
    });

    elements = [...sortArray(elements)];
    console.log(elements);
    checkSentence(question, elements);

    let number = 0;
    let result = 0;
    let op: string | null;

    elements.map((el) => {
        console.log('el= ' + el.value);
        if (Number.isInteger(Number.parseInt(el.value))) {
        number = Number.parseInt(el.value);
        result = Calculate(result, number, op);
        }   else {
            op = el.value;
        }
        console.log('result= ' + result);
        console.log('\n');
    });

    console.log(result);
};

function sortArray(arr: Array<WordyElement>) {
    return arr.sort((n1, n2) => {
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

function checkSentence(question: string, elements: WordyElement[]) {
    //non math question
    if (elements.length == 0) {
        const errorMsg = question.startsWith('What') ? 'Syntax error' : 'Unknown operation'
        throw new Error(errorMsg);
    }

    //missing an operand
    const countOperands = elements.filter((el) => el.type == ValueType.Operand).length;
    const countMathOpetations = elements.filter((el) => el.type == ValueType.MathOperation).length;
    
    const isValid = countMathOpetations === (countOperands - 1);
    if (!isValid) throw new Error('Syntax error');

    //reject postfix/prefix notation
    elements.forEach((element, index) => {
        if (index % 2 == 0 && element.type !== ValueType.Operand) {
            throw new Error('Syntax error');
        }
    });

    //unknown operation
    const hasUnsupportedOp = unSupportedOperations.some(item => question.indexOf(item) !== -1)
    if(hasUnsupportedOp) throw new Error('Unknown operation');
}
