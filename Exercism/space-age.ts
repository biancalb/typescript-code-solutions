const earth: { year: number, days: number, seconds: number } = {
    year: 1,
    days: 365.25,
    seconds: 31557600
}

interface Planet {
    name : string,
    earthYears: number,
}

const planets: Array<Planet> = [
    {
        name: 'earth',
        earthYears: 1
    },
    {
        name: 'mercury',
        earthYears: 0.2408467
    },
    {
        name: 'venus',
        earthYears: 0.61519726
    },
    {
        name: 'mars',
        earthYears: 1.8808158
    },
    {
        name: 'jupiter',
        earthYears: 11.862615
    },
    {
        name: 'saturn',
        earthYears: 29.447498
    },
    {
        name: 'uranus',
        earthYears: 84.01684
    },
    {
        name: 'neptune',
        earthYears: 164.79132
    },
];

export function age(planet: string, seconds: number): void {
    console.log(planet)
    let myPlanet: Planet | undefined = planets.find(p => p.name == planet.toLowerCase());

    if(myPlanet == undefined) throw new Error( 'Invalid planet name');

    let earthYears: number  = (seconds / earth.seconds);
    let myPlanetYears: number  = (earthYears / myPlanet.earthYears);

    console.log('age= ' + Number(myPlanetYears.toFixed(2)));
}
