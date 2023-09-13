import { Component, OnInit } from "@angular/core";
import { PostModel } from "../models/post.model";
import { MypostService } from "../services/mypost.service";

@Component({
    selector: 'mypost',
    templateUrl: './mypost.component.html'
})
export class MypostComponent implements OnInit {

    mypost: PostModel[] = [];
    constructor( private mypostservice: MypostService){

    }
    ngOnInit(): void {
        this.loadData();
    }
    loadData() {
        this. mypostservice.read().subscribe(response =>{
            this.mypost = response as PostModel[];
            console.table(this.mypost);
        })
        
    }
}