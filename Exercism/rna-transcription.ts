const sequences: Array<{ nucleotide: string; complement: string }> = [
  {
    nucleotide: "G",
    complement: "C",
  },
  {
    nucleotide: "C",
    complement: "G",
  },
  {
    nucleotide: "T",
    complement: "A",
  },
  {
    nucleotide: "A",
    complement: "U",
  },
];

export function transciptRna(nucleotides: string): void{
  let rna: string = "";
  for (const c of nucleotides) {
    let element = sequences.filter((el) => el.nucleotide == c);

    if (element.length < 1) throw new Error("Invalid input DNA.");
    else rna += element[0]?.complement;
  }
  console.log('rna= ' + rna)
//   return rna;
}
