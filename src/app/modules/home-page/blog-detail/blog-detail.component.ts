import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BlogModel, BlogService } from 'src/app/shared';
import { CommentModel } from 'src/app/shared/models/comment.model';
import { CommentsService } from 'src/app/shared/services/comment.service';

@Component({
    selector: 'app-blog-detail',
    templateUrl: './blog-detail.component.html',
    styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
    blogDataObject: BlogModel = {};
    dataCommentList: CommentModel[] = [];
    totalComment!: number;
    id = this.activetedRoute.snapshot.params['id'];
    constructor(
        private activetedRoute: ActivatedRoute,
        private _blogService: BlogService,
        private _commentService: CommentsService,
        private _cdRef: ChangeDetectorRef,
        private _spinner: NgxSpinnerService
    ) {}

    ngOnInit() {
        this.getByidBlogs();
        this.getListComment();
    }

    getByidBlogs() {
        this._spinner.show();
        this._blogService.get(this.id).subscribe((res: BlogModel) => {
            this.blogDataObject = res;
            setTimeout(() => {
                this._spinner.hide();
            }, 1000);
            this._cdRef.detectChanges();
        });
    }
    
    getListComment() {
        this._commentService.getListComments(this.id).subscribe((res: any) => {
            this.totalComment = res.items.length;
            this.dataCommentList = res.items;
            this._cdRef.detectChanges();
        });
    }
}
