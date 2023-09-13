import { HttpClient } from "@angular/common/http";
import { PostModel } from "../models/post.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })

export class PostService {

    apiBaseurl: string = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private httpClient: HttpClient ) {

    }

    create(item: PostModel) {
        return this.httpClient.post(this.apiBaseurl, item);
    }
    read() {
        return this.httpClient.get(this.apiBaseurl);
    }
    update(id: number, item: PostModel) {
        return this.httpClient.put(this.apiBaseurl + '/' + id, item);
    }
    delete(id: number) {
        return this.httpClient.delete(this.apiBaseurl + '/' + id);
    }
    getById(id: number) {
        return this.httpClient.get(this.apiBaseurl + '/' + id);
    }
} 