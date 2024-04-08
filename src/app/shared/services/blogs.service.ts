import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CrudBaseService } from 'src/app/core';

@Injectable({
    providedIn: 'root',
})
export class BlogService extends CrudBaseService {
    private subject = new Subject<any>();
    constructor(private _httpClient: HttpClient) {
        super('blogs', _httpClient);
    }
}
