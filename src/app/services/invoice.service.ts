import { InvoiceModel } from "../models/invoice.model"

export class InvoiceService {
    invoices: InvoiceModel[] = [
        {Id: 1, Code: '501', Description: 'Invoice from Laptop product', DateCreated: new Date(2023, 8, 8), CreatedBy: 'Naveen',Amount: 1000},
        {Id: 2, Code: '502', Description: 'Invoice from car tools', DateCreated: new Date(2023, 8, 9), CreatedBy: 'Nagarjuna', Amount: 4000},
        {Id: 3, Code: '503', Description: 'Invoice from phone software update', DateCreated: new Date(2023, 8, 9), CreatedBy: 'Muni', Amount: 4000},
        {Id: 4, Code: '504', Description: 'Invoice from Spare Parts', DateCreated: new Date(2022, 3, 9), CreatedBy: 'sateesh', Amount: 5000},
        {Id: 5, Code: '505', Description: 'Invoice from Big Data Updating', DateCreated: new Date(2024, 8, 9), CreatedBy: 'vishnu', Amount: 6000},
        {Id: 6, Code: '506', Description: 'Invoice from Clean virus', DateCreated: new Date(2023, 5, 9), CreatedBy: 'Praveen', Amount: 4000},
        {Id: 7, Code: '507', Description: 'Invoice from Software error issuse', DateCreated: new Date(2023, 3, 9), CreatedBy: 'Harsha', Amount: 2000}
    ];

    create(_invoice: InvoiceModel) {
        this.invoices.splice(0, 0, _invoice);
    }
    read() {
        return this.invoices;
    }
    update(id: number, _invoice: InvoiceModel) {
        let _itemIndex = this.invoices.findIndex(x => x.Id == id);
        this.invoices[_itemIndex] = _invoice;
    }
    dalete(id: number) {
        let _itemIndex = this.invoices.findIndex(x => x.Id == id);
        this.invoices.splice(_itemIndex, 1);
    }
    getById(id: number) {
        let _itemIndex = this.invoices.findIndex(x => x.Id == id);
        return this.invoices[_itemIndex];
    }
}