import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee = new EmployeeModel();
  constructor(private _empService: EmployeeService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    let empId = id ? id : '';
    this._empService.getById(empId)
      .subscribe(response => {
        if (response) {
          this.employee = response as EmployeeModel;
        }
      });
  }
}
