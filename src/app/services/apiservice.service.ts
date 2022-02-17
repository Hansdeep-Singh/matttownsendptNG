import { getHtmlTagDefinition } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RouteConfigLoadEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  readonly ROOT_URL = environment.ROOT_URL;
  constructor(private http: HttpClient) {}

  get(
    controller: string,
    method: string,
    intId?: number,
    stringId?: string
  ): Observable<any> {
    return this.http
      .get(this.ROOT_URL + `api/${controller}/${method}/${intId?intId:stringId?stringId:null}`)
      .pipe(catchError(this.handleError));
  }


  getVoid(
    controller: string,
    method: string,
  ): Observable<any> {
    return this.http
      .get(this.ROOT_URL + `api/${controller}/${method}`)
      .pipe(catchError(this.handleError));
  }
  post(model: any, controller: string, method: string): Observable<any> {
    const route = `api/${controller}/${method}/`;
    return this.http
      .post<any>(this.ROOT_URL + route, model)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => 'Something bad happened; please try again later.');
  }
}
