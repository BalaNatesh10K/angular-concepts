import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees: Employee[];

  enteredId: number;

  constructor(private employeeService: EmployeeService, private router: Router){}

  ngOnInit(): void{
    this.getEmployees();
  }

  goToEmployee(){
    console.log("Id looking for is ", this.enteredId);
    this.router.navigate(['details-of-employee', this.enteredId]);
  }

  getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number){
    this.router.navigate(['updating-by-id', id]);
  }

  deleteEmployee(id: number){
    if(confirm("Do you want to delete this record? "+id)){
      this.employeeService.deleteEmployee(id).subscribe(data => {
        console.log("Employee record deleted:",data);
        this.getEmployees();
      });
    }
  }

  //with the help of navigate function of router functionality, we navigate the user to another
  // function/page

  detailsOfEmployee(id: number){
    this.router.navigate(['details-of-employee',id]);
  }
}
