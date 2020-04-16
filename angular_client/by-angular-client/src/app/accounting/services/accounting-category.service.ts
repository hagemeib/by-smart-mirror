import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// Category model
import { Category } from '../models';

@Injectable({
    providedIn: 'root'
})
export class AccountingCategoryService {
    apiURL = 'http://localhost:3000/category';

    constructor(private http: HttpClient) { }

    // Http options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    // List categories
    getCategories(): Observable<Category> {
        return this.http.get<Category>(this.apiURL + '/')
        .pipe(retry(1), catchError(this.handleError));
    }

    // Get category
    getCategory(id): Observable<Category> {
        return this.http.get<Category>(this.apiURL + '/' + id)
        .pipe(retry(1), catchError(this.handleError));
    }

    // Create category
    createCategory(category): Observable<Category> {
        return this.http.post<Category>(this.apiURL + '/', JSON.stringify(category), this.httpOptions)
        .pipe(retry(1), catchError(this.handleError));
    }

    // Update category
    updateCategory(id, category): Observable<Category> {
        return this.http.put<Category>(this.apiURL + '/' + id, JSON.stringify(category), this.httpOptions)
        .pipe(retry(1), catchError(this.handleError));
    }

    // Delete category
    deleteCategory(id): Observable<Category> {
        return this.http.delete<Category>(this.apiURL + '/' + id, this.httpOptions)
        .pipe(retry(1), catchError(this.handleError));
    }

    // Error handling
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

}
