import express,{Express,Request,Response,json,urlencoded} from 'express';
import cors from 'cors';
import { addStudentToList, getAllStudents, getStudentByBirthdateLater, getStudentByCourseNumber, getStudentsByFacultyName, Student } from './Student';

const app:Express=express();
const APP_PORT:number=8080;

app.use(cors({methods:["GET","POST"]}));

app.use(json({
    limit:"128mb",
}));

app.use(urlencoded({
    limit:"128mb",
}));


app.get("/courseNumber/:value",(req:Request,res:Response)=>{
    const courseNumber:number=parseInt(req.params.value);
    res.send(getStudentByCourseNumber(courseNumber));
});

app.get("/all",(req:Request,res:Response)=>{
    res.send(getAllStudents());
});

app.get("/facultyName/:name",(req:Request,res:Response)=>{
    const name:string=req.params.name;
    res.send(getStudentsByFacultyName(name));
});

app.get("/dateOfBirth/:date",(req:Request,res:Response)=>{
    const dateOfBirth:string=req.params.date;
    console.log(dateOfBirth);
    res.send(getStudentByBirthdateLater(new Date(dateOfBirth)));
});


app.listen(APP_PORT,():void=>{
    console.log("SERVER STARTED");
    addStudentToList({
        courseNumber:4,
        dateOfBirth:new Date(1993,5,13),
        facultyName:"ИРТ",
        firstName: "Иван",
        lastName: "Иванов",
        patronymic:"Иванович"
    });
    
    addStudentToList({
        courseNumber:2,
        dateOfBirth:new Date(1997,11,4),
        facultyName:"АТС",
        firstName: "Иван",
        lastName: "Петров",
        patronymic:"Петрович"
    });
    
    addStudentToList({
        courseNumber:5,
        dateOfBirth:new Date(1995,8,21),
        facultyName:"ОНФ",
        firstName: "Петр",
        lastName: "Петров",
        patronymic:"Петрович"
    });
    
    addStudentToList({
        courseNumber:3,
        dateOfBirth:new Date(1993,5,13),
        facultyName:"ФАД",
        firstName: "Ефим",
        lastName: "Магомедов",
        patronymic:"Абдулаевич"
    });
    
    addStudentToList({
        courseNumber:1,
        dateOfBirth:new Date(1998,5,13),
        facultyName:"ИРТ",
        firstName: "Вася",
        lastName: "Пупкин",
        patronymic:"Чухбехович"
    });
    
    addStudentToList({
        courseNumber:1,
        dateOfBirth:new Date(1998,5,13),
        facultyName:"ФАД",
        firstName: "Ильдар",
        lastName: "Копаев",
        patronymic:"Олегович"
    });
});

