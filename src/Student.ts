
interface StudentData{
    firstName:string;
    lastName:string;
    patronymic:string;
    dateOfBirth:Date;
    courseNumber:number;
    facultyName:string;
}


export class Student{
    public readonly id:number;
    constructor(public firstName:string,
                public lastName:string,
                public patronymic:string,
                public dateOfBirth:Date,
                public courseNumber:number,
                public facultyName:string){
        if (studentList.length === 0)
            this.id=0;
        else
            this.id=studentList[studentList.length-1].id + 1;
        studentList.push(this);
    }
    get():Student{
        return this;
    }
    set(studentData:StudentData){
        this.firstName=studentData.firstName;
        this.lastName=studentData.lastName;
        this.patronymic=studentData.patronymic;
        this.facultyName=studentData.facultyName;
        this.dateOfBirth=studentData.dateOfBirth;
        this.courseNumber=studentData.courseNumber;
    }   
}

const studentList:Student[]=[];

export function getAllStudents():Student[]{
    return studentList;
}

export function getStudentsByFacultyName(facultyName:string):Student[]{
        return studentList.filter(student=>student.facultyName === facultyName);
}

export function getStudentByCourseNumber(courseNumber:number):Student[]{
    return studentList.filter(student=>student.courseNumber === courseNumber);
}

export function getStudentByBirthdateLater(dateOfBirth:Date):Student[]{
    return studentList.filter(student=>student.dateOfBirth >= dateOfBirth);
}

export function addStudentToList(studentData:StudentData):void{
        new Student(studentData.firstName,
                                     studentData.lastName,
                                     studentData.patronymic,
                                     studentData.dateOfBirth,
                                     studentData.courseNumber,
                                     studentData.facultyName);
}



