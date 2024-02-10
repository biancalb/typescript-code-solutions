export function transform(obj: { [key: string]: string[] }) {
    let letterScore: { [newKey: string]: number } = {};

    for (const [key, value] of Object.entries(obj)) {
        const newValue = parseInt(key);

        value.forEach(letter => {
            const newKey = letter.toLowerCase();
            letterScore[newKey] = newValue;
        });
    }
    console.log(letterScore)
}
  