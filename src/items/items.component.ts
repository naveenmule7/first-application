import { Component, OnInit } from "@angular/core";
import { ItemsModel } from "src/app/models/items.model";
import { ItemsService } from "src/app/services/items.service";

@Component({
    selector: 'items',
    templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {
    items: ItemsModel[] = [];
    // itemsModel: ItemsModel;
    itemInCart: number = 0;

    constructor(private itemsService: ItemsService) { }

    

    ngOnInit(): void {
        this.items = this.itemsService.read();
    }
    updateItemsInCartCount(increment: number){
        this.itemInCart = this.itemInCart + increment;
    }
    
}
