import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommentModel } from 'src/app/shared/models/comment.model';

@Component({
    selector: 'app-comment-blog',
    templateUrl: './comment-blog.component.html',
    styleUrls: ['./comment-blog.component.scss']
})
export class CommentBlogComponent implements OnInit, OnChanges {
    @Input() dataCommentList: CommentModel[] = [];
    constructor(

    ) { }
    ngOnChanges(changes: SimpleChanges): void {
    }
    
    ngOnInit() {
    }
}
