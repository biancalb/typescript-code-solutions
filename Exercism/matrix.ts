export class Matrix {
  private matrix: Array<Array<number>>;

  constructor(matrix: string) {
    let formattedMatrix: Array<Array<number>> = [];
    let rows = matrix.split("\n");

    for (let index = 0; index < rows.length; index++) {
      const row = rows[index];
      let newRow: Array<number> = [];

      row.split(" ").forEach((item) => {
        newRow.push(Number(item));
      });
      formattedMatrix.push(newRow);
    }
    this.matrix = formattedMatrix;
  }

  get rows(): Array<Array<number>> {
    return this.matrix;
  }

  get columns(): Array<Array<number>> {
    let columns: Array<Array<number>> = [];
    const numberOfColumns = this.matrix[0].length;

    for (let index = 0; index < numberOfColumns; index++) {
      let newCol: Array<number> = [];
      this.matrix.forEach((row) => {
        newCol.push(row[index]);
      });
      columns.push(newCol);
    }
    return columns;
  }
}
