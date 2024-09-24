import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../model/tags.model';

const baseURL = 'http://localhost:7905/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }

  getAllTutorialTags(id: any): Observable<Tag[]>{
    return this.http.get<Tag[]>(`${baseURL}/${id}/tags`);
  }
}
