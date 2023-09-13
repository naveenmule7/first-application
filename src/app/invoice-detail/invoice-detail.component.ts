import { Component, OnInit } from "@angular/core";
import { InvoiceModel } from "../models/invoice.model";
import { InvoiceService } from "../services/invoice.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-invoice-detail',
    templateUrl: './invoice-detail.component.html'
})
export class InvoiceDetailComponent implements OnInit {
    invoice = new InvoiceModel();
    
    constructor(private _invService: InvoiceService, private router: ActivatedRoute) { }

    ngOnInit(): void {
        let id = this.router.snapshot.paramMap.get('id');
        this.invoice = this._invService.getById(+id!);
    }
}