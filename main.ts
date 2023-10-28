#!usr/bin/env node 

import inquirer from "inquirer";

class Student{
    name :string
    constructor(name:string){
        this.name=name
    }
}  

class Person {
    students:Student[]=[]

    addStudent(obj:any){
        this.students.push(obj)
    }
}
const persons = new Person()

const programmStart =async (persons:Person)=>{
    do{
    console.log("WELCOME GUEST")

    const ans = await inquirer.prompt({
        type:"list",
        message :"Who will you talk to ?",
        name : "select",
        choices:["self","student"]

    });
    if(ans.select == "self"){
        console.log(`hello ! I am fine.`)
    }
    if(ans.select == "student"){
        const ans = await inquirer.prompt({
            type: "input",
            message:"Who do you want to talk to",
            name:"student",
        });

        const student = persons.students.find(val => val.name ==ans.student);

        if(!student){
            const name= new Student(ans.student)
            persons.addStudent(name)
            console.log(`hello i am ${name}, I am fine`);
            console.log(persons.students);
        }
        if(student){
            console.log(`hello i am ${ student.name}, I am fine ............`);
            console.log(persons.students);
        }
    }
    }while(true)
    };
programmStart(persons);