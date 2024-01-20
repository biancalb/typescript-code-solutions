import { transciptRna } from "./rna-transcription";
import { age } from "./space-age";
import { Matrix } from "./matrix";
import { score as scoreDarts } from "./darts";
import { isPangram } from "./pangram";
import { hey } from "./bob";
import { GradeSchool } from "./grade-school";
import { countWords } from "./word-count";
import { Clock } from "./clock";

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

// console.log('Darts');
// const coordinates: [number, number] = [0, 10];
// scoreDarts(coordinates[0], coordinates[1]);

// console.log('Pangram');
// // const str = '';
// // const str = 'abcdefghijklmnopqrstuvwxyz';
// // const str = 'the quick brown fox jumps over the lazy dog';
// const str = 'a quick movement of the enemy will jeopardize five gunboats';
// isPangram(str);

// // const message = 'Tom-ay-to, tom-aaaah-to.';
// // const message = 'WATCH OUT!';
// // const message = 'WHAT THE HELL WERE YOU THINKING?';
// // const message = ' ';
// // const message = '4?';
// const message = '1, 2, 3';
// hey(message);

// console.log('Grade School\n');
// const student1:[string, number] = ['Aimee', 2];
// const student2:[string, number] = ['Blair', 2];
// const student3:[string, number] = ['Paul', 2];
// const student4:[string, number] = ['James', 2];
// const student5:[string, number] = ['Chelsea', 3];
// const student6:[string, number] = ['Logan', 7];
// let school = new GradeSchool;
// // school.add(student2[0], student2[1]);
// // school.add(student1[0], student1[1]);
// school.add(student3[0], student3[1]);
// school.add(student6[0], student6[1]);
// school.add(student5[0], student5[1]);
// school.roster();
// school.grade(2);

// console.log('Word School\n');
// // const str = '\"That\'s the password: \'PASSWORD 123\'!", cried the Special Agent.\nSo I fled.'
// const str = 'reserved words like constructor and toString ok?'
// // console.log(str)
// countWords(str);

console.log('Clock')
// console.log(new Clock(25, 5).toString());
// console.log(new Clock(10, 0).plus(3).toString())
// console.log(new Clock(15, 36).equals(new Clock(15, 37)))
// console.log(new Clock(10, 37).equals(new Clock(34, 37)))
console.log(new Clock(8).toString())