import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ItemsModel } from "src/app/models/items.model";

@Component ({
    selector: 'item',
    templateUrl: './item.component.html'
})
export class ItemComponent {
   @Input() itemData: ItemsModel;
   @Input() phone: number;
   
   @Output() itemClicked : EventEmitter<number> = new EventEmitter<number>();

   addToCart(){
        this.itemClicked.emit(1);
   }
}