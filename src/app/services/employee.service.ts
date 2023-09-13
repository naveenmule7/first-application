import { AngularFirestore } from "@angular/fire/compat/firestore";
import { EmployeeModel } from "../models/employee.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })

export class EmployeeService {
    private collection: string = 'employee';
    constructor(private firestore: AngularFirestore) {
    }

    create(employee: EmployeeModel) {
        return this.firestore.collection(this.collection).add({ ...employee });
    }
    read() {
        return this.firestore.collection(this.collection).snapshotChanges();
    }
    update(id: string, employee: EmployeeModel) {
        return this.firestore.doc(`${this.collection}/${id}`).update({ ...employee });
    }
    delete(id: string) {
        return this.firestore.doc(`${this.collection}/${id}`).delete();
    }
    getById(id: string) {
        return this.firestore.doc(`${this.collection}/${id}`).valueChanges();
    }
}