import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { BlogModel, BlogService } from 'src/app/shared';

@Component({
    selector: 'app-create-edit-blog',
    templateUrl: './create-edit-blog.component.html',
    styleUrls: ['./create-edit-blog.component.scss'],
})
export class CreateEditBlogComponent implements OnInit {
    dataBlog: BlogModel = {};
    blogsForm!: FormGroup;
    idblog = this.activetedRoute.snapshot.params['id'];
    imageFile: any;
    objectURL: string = '';
    submitted: boolean = false;
    deleteConfirmDialog: boolean = false;

    constructor(
        private activetedRoute: ActivatedRoute,
        private _blogService: BlogService,
        private _cdRef: ChangeDetectorRef,
        private _fb: FormBuilder,
        private _messageService: MessageService,
        private _spinner: NgxSpinnerService,
        private _router: Router
    ) {}

    ngOnInit() {
        this.initForm();
        if (this.idblog) {
            this._updateFormValue();
        }
    }

    get f() {
        return this.blogsForm.controls;
    }

    initForm(): void {
        this.blogsForm = this._fb.group({
            id: [0],
            title: ['', Validators.required],
            content: ['', Validators.required],
            image: [],
        });
    }

    private _updateFormValue(): void {
        this._spinner.show();
        this._blogService.get(this.idblog).subscribe({
            next: (res: BlogModel) => {
                this.blogsForm.patchValue({
                    id: res.id,
                    title: res.title,
                    content: res.content,
                });
                this.objectURL = res?.image?.url as string;
                this._cdRef.detectChanges();
                setTimeout(() => {
                    this._spinner.hide();
                }, 1000);
            },
        });
    }

    onUpload(event: any) {
        let file = event.files[0];

        file.objectURL = file.objectURL ? file.objectURL : this.objectURL;

        if (!file.objectURL) {
            return;
        } else {
            this.imageFile = file;
            this.objectURL = file.objectURL;
        }
    }

    removeImage() {
        this.imageFile = null;
        this.objectURL = '';
    }

    onSubmit() {
        this.submitted = true;
        if (this.blogsForm.invalid) {
            return;
        }
        let formData: any = new FormData();
        formData.append('blog[title]', this.blogsForm.value.title);
        formData.append('blog[content]', this.blogsForm.value.content);
        if(this.imageFile){
            formData.append(
                'blog[image]',
                this.imageFile,
                this.imageFile.name,
                'type=' + this.imageFile.type
            );
        }
        if (!this.idblog) {
            this.createBlog(formData);
        } else {
            this.updateBlog(formData);
        }
    }

    createBlog(formData: FormData): void {
        this._blogService.create(formData).subscribe({
            next: (res: BlogModel) => {
                this._router.navigateByUrl('/');
                this._handleNotifyMsg(
                    'Added blog successfully',
                    'Success',
                    'success'
                );
            },
            error: (err) => {
                this._handleNotifyMsg('Add blog failed', 'Error', 'error');
            },
        });
    }

    updateBlog(formData: FormData): void {
        this._blogService.update(formData, this.idblog).subscribe({
            next: (res: BlogModel) => {
                this._router.navigateByUrl('/blog-detail/' + this.idblog);
                this._handleNotifyMsg(
                    'Update blog successfully',
                    'Success',
                    'success'
                );
            },
            error: (err) => {
                this._handleNotifyMsg('Update blog failed', 'Error', 'error');
            },
        });
    }

    deleteBlog(): void {
        this.deleteConfirmDialog = true;
    }

    confirmDelete() {
        this._spinner.show();
        this._blogService.delete(this.idblog).subscribe({
            next: (res: BlogModel) => {
                this.deleteConfirmDialog = false;
                this._handleNotifyMsg(
                    'Delete blog successfully',
                    'Success',
                    'success'
                );
                setTimeout(() => {
                    this._spinner.hide();
                    this._router.navigateByUrl('/');
                }, 1000);
            },
            error: (err) => {
                this._handleNotifyMsg('Delete blog failed', 'Error', 'error');
            },
        });
    }

    private _handleNotifyMsg(
        msgDetail: string,
        msgSummary: string,
        severityType: string
    ): void {
        this._messageService.add({
            severity: severityType,
            summary: msgSummary,
            detail: msgDetail,
            life: 3000,
        });
    }
}
