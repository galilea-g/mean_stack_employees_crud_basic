import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe(
      res =>{
        this.employeeService.employees = res;

      },
      err => console.log(err)
    )
  }

  addEmployee(form: NgForm){
    if(form.value._id){
      this.employeeService.putEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset()
        },
        err => console.error(err)
      )
    }
    else{
      this.employeeService.createEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset()
        },
        err => console.log(err)
      )
    }
  }

  deleteEmployee(id: string){
    const res = confirm('Are ypu sure you want to delete it?');
    if(res){
      this.employeeService.deleteEmployee(id).subscribe(
        res =>{
          this.getEmployees();
          console.log(res)
        },
        err => console.error(err)
      )
    }
    console.log(res)
  }

  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
  }

}