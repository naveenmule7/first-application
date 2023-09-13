import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../services/post.services";
import { PostModel } from "../models/post.model";

@Component({
    selector: 'post-detail',
    templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit {
    id: number = 0;
    postModel = new PostModel();

    constructor(private activeRouter: ActivatedRoute, private postService: PostService) {
    }

    ngOnInit(): void {
        let postId = this.activeRouter.snapshot.paramMap.get('id'); 
        this.id= +postId!; 
        // let userId = this.activeRouter.snapshot.paramMap.get('userId'); 

        // let name = this.activeRouter.snapshot.paramMap.get('name');
        // let title = this.activeRouter.snapshot.paramMap.get('title');
        
        // console.log (name, title);

        this.postService.getById(this.id).subscribe(
            response => {
              this.postModel = response as PostModel; 
              console.log(this.postModel) 
            },
            error => {
                console.log(error);
            }
            
        )
    }
}