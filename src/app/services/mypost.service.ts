import { HttpClient } from "@angular/common/http";
import { MypostModel } from "../models/mypost.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class MypostService {

    apiMypostUrl = 'https://jsonplaceholder.typicode.com/posts';
    constructor (private mypostClient: HttpClient) {

    }

    create(item:MypostModel) {
        return this.mypostClient.post(this.apiMypostUrl, item);
    }
    read() {
        return this.mypostClient.get(this.apiMypostUrl);
    }
    update(id: number, item:MypostModel) {
        return this.mypostClient.put(this.apiMypostUrl +'/'+id,item);
    }
    delete(id: number) {
        return this.mypostClient.delete(this.apiMypostUrl+'/'+id);
    }
}