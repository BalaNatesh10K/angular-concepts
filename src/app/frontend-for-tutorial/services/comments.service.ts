import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../model/comment.model';


const baseURL = 'http://localhost:7905/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getAllTutorialComments(id: any): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${baseURL}/${id}/comments`);
  }

  getComment(id: any): Observable<Comment>{
      return this.http.get<Comment>(`http://localhost:7905/api/comments/${id}`);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`http://localhost:7905/api/comments/${id}`, data);
}


  delete(id: any): Observable<any>{
    return this.http.delete(`http://localhost:7905/api/comments/${id}`);
}

deleteAllCommentsOfATutorial(id: any): Observable<any>{
  return this.http.delete(`${baseURL}/${id}/comments`);
}

}
