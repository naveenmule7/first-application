import { Component } from "@angular/core";
import { HeroService } from "./hero.service";

@Component({
    selector: 'hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
// string Interpolation-1,2
export class HeroComponent{
    title: string='Bike Model';

    BikeModels: string[] = [];

    constructor() {
        let objBikeModels = new HeroService();
        this.BikeModels = objBikeModels.listBikeModels();
    }
}