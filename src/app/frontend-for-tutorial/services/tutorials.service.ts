import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tutorial } from "../model/tutorial.model";


const baseURL = 'http://localhost:7905/api/tutorials';

@Injectable({
    providedIn: 'root'
})
export class TutorialService{
    constructor (private http: HttpClient){}

    //This method will help us get all tutorials table data from springboot/database
    getAll(): Observable<Tutorial[]>{
        return this.http.get<Tutorial[]>(baseURL);
    }

    get(id: any): Observable<Tutorial>{
        return this.http.get<Tutorial>(`${baseURL}/${id}`);
    }

    create(data: any): Observable<any>{
        return this.http.post(baseURL, data);
    }

    update(id: any, data: any): Observable<any>{
        return this.http.put(`${baseURL}/${id}`, data);
    }

    delete(id: any): Observable<any>{
        return this.http.delete(`${baseURL}/${id}`);
    }

    deleteAll(): Observable<any>{
        return this.http.delete(baseURL);
    }

    findByTitle(title: any): Observable<Tutorial[]>{
        return this.http.get<Tutorial[]>(`${baseURL}?title=${title}`);
    }
}