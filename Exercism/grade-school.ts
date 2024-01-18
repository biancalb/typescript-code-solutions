interface Grades{
    [grade: number]: Array<string>
} 
export class GradeSchool {
    private School: Grades;
    
    constructor() {
        this.School = {};
    }

    roster() {
        for (const grade in this.School) {
            this.School[grade]?.sort()
        }
        console.log(JSON.parse(JSON.stringify(this.School)));
        return JSON.parse(JSON.stringify(this.School));
    }
  
    add(studentName:string, grade: number): void {
        this.School[grade] = this.School[grade] || [];

        this.checkNameExists(studentName);
        
        this.School[grade].push(studentName);
    }
  
    grade(grade: number) {
        let students = this.School[grade]?.sort() || []
        console.log(JSON.parse(JSON.stringify(students)));
    }

    private checkNameExists(studentName: string) {
        let alreadyAdded = this.checkGrades(studentName);

        if(alreadyAdded) { 
            this.School[Number(alreadyAdded)] = this.School[Number(alreadyAdded)].filter(name => name != studentName);
        }
    }

    private checkGrades(name: string): string | undefined {
        let alreadyAdded: string | undefined;

        for (const grade in this.School) {
            let found = this.School[grade].some(a => a == name);
            if(found) {
                alreadyAdded = grade;
            }
        }
        return alreadyAdded;
    }
  }
  