import { NgModule } from "@angular/core";
import { InvoiceComponent } from "./invoice.component";
import { InvoiceDetailComponent } from "../invoice-detail/invoice-detail.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { InvoiceService } from "../services/invoice.service";

const routes: Routes = [
    {path: ':id', component: InvoiceDetailComponent},
    {path: '', component: InvoiceComponent },
]
@NgModule({
    declarations: [
        InvoiceComponent,
        InvoiceDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [InvoiceService],
    bootstrap: []
})
export class InvoiceModule {

}