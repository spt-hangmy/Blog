import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { CrudBaseService } from 'src/app/core';

@Injectable({
    providedIn: 'root',
})
export class CommentsService extends CrudBaseService {
    private subject = new Subject<any>();
    constructor(private _httpClient: HttpClient) {
        super('comments', _httpClient);
    }
    getListComments(id: string): Observable<any> {
        return this.httpClient
            .get<any>(`https://mock-api.nals.vn/api/v2/blogs/${id}/comments`)
            .pipe(map((res: any) => res && res.data));
    }
}
