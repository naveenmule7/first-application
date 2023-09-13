import { Component, OnInit } from "@angular/core";
import { PostModel } from "../models/post.model";
import { PostService } from "../services/post.services";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'post',
    templateUrl: './post.component.html'
})

export class PostComponent implements OnInit {
    [x: string]: any;
    posts: PostModel[] = [];
    title: string = '';
    postModel = new PostModel();
    pageNumber: number = 1;
    
    constructor(private postService: PostService, private toastr: ToastrService){

    }

    addPost() {
        this.title = 'Create Post';
        this.postModel = new PostModel();
    }
    editPost(post: PostModel) {
        this.title = 'Edit Post';
        this.postModel = post;
    }
    delete(id: number) {
        if(confirm('Are you sure to delete this file...!'))
        // alert("file delete successfully");
        try{
        this.postService.delete(id).subscribe(
            
            (response) => {
            let itemIndex = this.posts.findIndex(x => x.id == id);
            this.posts.splice(itemIndex, 1);
            this.toastr.success('Post delete successfully...#');
            
            // this.loadData();
        
        },
        (error: Response) =>{
            this.handleError(error);
        
    })
        }
        catch (error: any) {
        this.toastr.error(error);
        }
    }
    savePost() {
    try{
        if (this.postModel.id) {
            //update
            this.postService.update(this.postModel.id, this.postModel).subscribe(
                (response) => {
                
                let itemIndex = this.posts.findIndex(x => x.id == this.postModel.id);
                this.posts[itemIndex] = response as PostModel;

                //  this.alertMessage = 'Post updated successfully'
                this.toastr.success('Post updated successfully...#');
            })
        }
        else {
            //create
            this.postService.create(this.postModel).subscribe(response => {
                
                // this.posts.push(response as PostModel);
                let item = response as PostModel;
                this.posts.splice(0, 0, response as PostModel);

                // this.alertMessage = 'Post Created Successfully'
                this.toastr.success('Post Created Successfully...#');
            },
                (error: Response) =>{
                    this.handleError(error);
                
            })
            
        }
        // this.loadData();
    }
    catch (error: any) {
        this.toastr.error(error);
        }
    }
    

    ngOnInit(): void {
       this.loadData();
    }
    loadData() {
        try{
        this.postService.read().subscribe(
            (sResponse) => {
                this.posts = sResponse as PostModel[];

            },
            (error: Response) => { this.handleError(error); });
        }
        catch (error: any) {
            this.toastr.error(error);
            }
            
    }
    handleError(error: Response) {
        if (error.status == 404) {
            this.toastr.error(`Response not dound : Message : ${error.statusText}`);
        }
        else if(error.status == 400) {
            this.toastr.error('Invalid request...!')
        }
        else if (error.status == 401) {
            this.toastr.error('Unauthorized request..!');
        }
        else {
            this.toastr.error(error.statusText);
        } 
    }
}  