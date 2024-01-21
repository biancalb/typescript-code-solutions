type Actions = {
    index: number,
    command: string,
}

const secretActions: Array<Actions> = [
    {
        index: 4,
        command: 'wink'
    },
    {
        index: 3,
        command: 'double blink'
    },
    {
        index: 2,
        command: 'close your eyes'
    },
    {
        index: 1,
        command: 'jump'
    },
    {
        index: 0,
        command: 'reverse'
    }
]

export function commands(num: number) {
    let binary = Number(num).toString(2);
    console.log("converted= " + binary)
    
    binary = binary.length > 5 
        ? binary = binary.substring(binary.length - 5)
        : binary = binary.padStart(5,'0');

    let decodedActios: Array<string> = [];

    for (let index = binary.length - 1; index >= 0; index--) {
        const bit = binary[index];

        if(Number(bit) == 1) {
            let action = secretActions.find(a => a.index === index)?.command;

            decodedActios.push(action || '');
        }
    }

    if (decodedActios.indexOf('reverse') != -1) {
        decodedActios = decodedActios.slice(0, -1).reverse();
    }

    console.log(decodedActios);
}
  