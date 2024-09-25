import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent {

id: number;
employee: Employee;

constructor(private route: ActivatedRoute, private employeeService: EmployeeService){}

ngOnInit(){
  this.id = this.route.snapshot.params['id'];
  this.employee = new Employee();
  this.employeeService.getEmployeeById(this.id).subscribe(data => {
    this.employee = data;
  })
}
}
