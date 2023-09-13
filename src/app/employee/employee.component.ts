import { Component, OnInit } from "@angular/core";
import { EmployeeModel } from "../models/employee.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EmployeeService } from "../services/employee.service";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    employees: EmployeeModel[] = [];
    title: string = '';
    employee = new EmployeeModel ();
    pageNumber: number = 1;

    empForm = new FormGroup({
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        gender: new FormControl(null, Validators.required),
        mobileNumber: new FormControl(null, Validators.required),
        salary: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required)
    });
    constructor(private _empService: EmployeeService, private toastr: ToastrService) {
    }
    addEmployee() {
        this.title = 'Add Employee';
        this.employee = new EmployeeModel ();
        this.empForm.reset();
    }
    editEmployee(_employee: EmployeeModel) {
        this.title = 'Edit Employee';
        this.employee = _employee;
    }
    deleteEmployee(id?: string) {
        this._empService.delete(id!)
          .then(response => {
            this.toastr.success('Deleted successfully...!');
          })
          .catch((error: Response) => {
            this.handleError(error);
          });
      }
      saveEmployee() {
        if (this.employee.id) {
          this._empService.update(this.employee.id, this.employee)
            .then(response => {
              this.toastr.success('Updated successfully...!');
            })
            .catch((error: Response) => {
              this.handleError(error);
            });
        }
        else {
          this._empService.create(this.employee)
            .then(response => {
              this.toastr.success('Added successfully...!');
    
            })
            .catch((error: Response) => {
              this.handleError(error);
            });
        }
        this.employee = new EmployeeModel();
        this.empForm.reset();
      }
      ngOnInit(): void {
        this.loadData();
      }
      loadData() {
        this._empService.read()
          .subscribe(
            response => {
              this.employees = response.map((data) => {
                return {
                  id: data.payload.doc.id,
                  ...data.payload.doc.data() as EmployeeModel
                }
              });
            },
            (error: Response) => {
              this.handleError(error);
            })
      }
      handleError(error: Response) {
        if (error.status == 404) {
          this.toastr.error('Employee(s) not found...!');
        }
        else if (error.status == 400) {
          this.toastr.error('Bad request...!');
        }
        else if (error.status == 401) {
          this.toastr.error('Un-authorized...!');
        }
        else if (error.status == 500) {
          this.toastr.error('Internal server error...!');
        }
        else {
          this.toastr.error('Un-handled exception occured...!');
        }
      }
}