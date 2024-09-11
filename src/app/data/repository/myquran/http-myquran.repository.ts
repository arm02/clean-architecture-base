import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyQuranRepository } from 'src/app/core/repository/myquran.repository';
import {
  HttpMyQuranLocationByIdResponse,
  HttpMyQuranLocationResponse,
} from './http-myquran.collection';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpMyQuranRepository implements MyQuranRepository {
  constructor(private http: HttpClient) {}

  GetLocation(): Observable<HttpMyQuranLocationResponse> {
    const url = `https://api.myquran.com/v2/sholat/kota/semua`;
    return this.http.get<HttpMyQuranLocationResponse>(url);
  }

  GetLocationByKeyword(
    params: string
  ): Observable<HttpMyQuranLocationResponse> {
    const url = `https://api.myquran.com/v2/sholat/kota/cari/${params}`;
    return this.http.get<HttpMyQuranLocationResponse>(url);
  }

  GetLocationById(params: string): Observable<HttpMyQuranLocationByIdResponse> {
    const url = `https://api.myquran.com/v2/sholat/kota/${params}`;
    return this.http.get<HttpMyQuranLocationByIdResponse>(url);
  }
}
