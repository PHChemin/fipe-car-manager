import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ErrorUtil } from '../util/error-util';

@Injectable({
  providedIn: 'root'
})
export class FipeService {
  private apiBaseUrl = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/';

  constructor(private http: HttpClient) {}

  getAllBrands(): Observable<any>{
    return this.http.get(`${this.apiBaseUrl}`)
      .pipe(
        retry(2),
        catchError((error) => {
          return ErrorUtil.handleError(error);
        })
      );
  }

  getModels(brandCode: number): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}${brandCode}/modelos`)
    .pipe(
      retry(2),
      catchError((error) => {
        return ErrorUtil.handleError(error);
      })
    );
  }

  getYears(brandCode: number, modelCode: number): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}${brandCode}/modelos/${modelCode}/anos/`)
    .pipe(
      retry(2),
      catchError((error) => {
        return ErrorUtil.handleError(error);
      })
    );
  }

  getAllInformations(brandCode: number, modelCode: number, yearCode: number): Observable<any>{
    return this.http.get(`${this.apiBaseUrl}${brandCode}/modelos/${modelCode}/anos/${yearCode}`)
    .pipe(
      retry(2),
      catchError((error) => {
        return ErrorUtil.handleError(error);
      })
    );
  }
}
