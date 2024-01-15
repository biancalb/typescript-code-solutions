import { transciptRna } from "./rna-transcription";
import { age } from "./space-age";
import { Matrix } from "./matrix";
import { score as scoreDarts } from "./darts";

// console.log('Rna Transcription')
// // const nucleotides: string = 'C';
// const nucleotides: string = 'ACGTGGTCTTAA';
// transciptRna(nucleotides);

// console.log('Space Age')
// // const planet: [string, number] = ['earth', 1000000000];
// const planet: [string, number] = ['Mercury', 2134835688];
// age(planet[0],planet[1]);

// console.log('Matrix');
// let row = new Matrix('1 2\n3 4').rows[1];
// console.log('row= ' + row);
// let col = new Matrix('1 2\n3 4').columns[0];
// console.log('col= ' + col);

console.log('Darts');
const coordinates: [number, number] = [0, 10];
scoreDarts(coordinates[0], coordinates[1]);



