import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { User } from '../models';

@Injectable()
export class UserService {
   baseURL = 'http://localhost:6000/api';

   constructor(private http: HttpClient){
   }

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
    };

    getUsers(userName: string): Observable<User[]> {
            return this.http.get<User[]>(this.baseURL + '/' )
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
