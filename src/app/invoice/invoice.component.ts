import { Component, OnInit } from "@angular/core";
import { InvoiceModel } from "../models/invoice.model";
import { InvoiceService } from "../services/invoice.service";


@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {
    _invoices: InvoiceModel[] = [];
    invoiceModel: InvoiceModel;
    title: string;

    constructor(private _invService: InvoiceService) { }

    addPost() {
        this.title = 'Create Post';
        this.invoiceModel = new InvoiceModel();
    }

    ngOnInit(): void {
        this.loadData();
    }
    loadData() {
        this._invoices = this._invService.read();
    }
}   