export class Employee {
    id!: number;
    fname!: string;
    lname!: string;
    email!: string;
    salary!: number;
    department: string;
    designation: string;
    joiningDate!: string;

    //On the save employee page, only these fields will come with the mentioned default values!
    constructor(){
        this.email="x@email.com";
        this.salary=0;
        this.department="";
        this.designation="";
    }
}
