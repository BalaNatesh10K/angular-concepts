import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  constructor(private employeeService: EmployeeService, private route: Router){}

  submitForm: NgForm;
  employee: Employee = new Employee();

  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe(
      data => {
        console.log("Data saved is",data);
        this.goToEmployeesList();
      },
      error => console.error(error)
    );
  }

  goToEmployeesList(){
    this.route.navigate(['/show-all-employees']);
  }

  onSubmit(){
    console.log("SAve Employee data as", this.employee);
    this.saveEmployee();
  }
}
