import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilterHelper } from 'src/app/core/helpers/filter.helper';
import { BlogSortConstant } from 'src/app/shared/constants/common.constant';
import { BlogModel } from 'src/app/shared/models/blog.model';
import { BlogService } from 'src/app/shared/services/blogs.service';

@Component({
    selector: 'app-list-blog',
    templateUrl: './list-blog.component.html',
    styleUrls: ['./list-blog.component.scss'],
})
export class ListBlogComponent implements OnInit {
    arrayBlog: BlogModel[] = [];
    blogSortList = BlogSortConstant;
    currentPage!: number;
    totalPages!: number;
    totalPagesArray: number[] = [];
    blogsForm!: FormGroup;
    isInputFocused: boolean = false;
    searchValue: string = '';
    constructor(
        private _blogService: BlogService,
        private _cdRef: ChangeDetectorRef,
        private _fb: FormBuilder,
        private _spinner: NgxSpinnerService
    ) {}

    ngOnInit() {
        this.initForm();
        this.getListBlog();
    }

    initForm(): void {
        this.blogsForm = this._fb.group({
            search: [],
            sort_by: [],
            page: [],
        });
    }

    getListBlog() {
        this._spinner.show();
        let params = FilterHelper.removeNullValue(this.blogsForm.value);
        this._blogService.filter(params).subscribe((res: any) => {
            this.arrayBlog = res.data.items;
            this.totalPages = res.pagination.total;
            this.currentPage = res.pagination.page;
            this.totalPagesArray = Array.from(
                { length: this.totalPages },
                (_, index) => index + 1
            );
            setTimeout(() => {
                this._spinner.hide();
            }, 1000);
            this._cdRef.detectChanges();
        });
    }

    goToPage(page: any): void {
        this.blogsForm.patchValue({
            page: page,
        });
        this.getListBlog();
    }
    nextPage(): void {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.blogsForm.patchValue({
                page: this.currentPage,
            });
            this.getListBlog();
        }
    }

    prevPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.blogsForm.patchValue({
                page: this.currentPage,
            });
            this.getListBlog();
        }
    }

    onFocusOut(event: any) {
        if (event.target.value != '') {
            this.getListBlog();
        }
    }

    onInputChange(event: any) {
        const value = event.target.value;
        this.searchValue = value;
        if (this.isInputFocused && this.searchValue === '') {
            this.getListBlog();
        }
    }

    onInputFocus() {
        this.isInputFocused = true;
    }

    onSortDirectionChange() {
        this.getListBlog();
    }
}
