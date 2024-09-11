import { Observable } from 'rxjs';
import {
  HttpMyQuranLocationByIdResponse,
  HttpMyQuranLocationResponse,
} from 'src/app/data/repository/myquran/http-myquran.collection';
export abstract class MyQuranRepository {
  abstract GetLocation(): Observable<HttpMyQuranLocationResponse>;
  abstract GetLocationByKeyword(
    params: string
  ): Observable<HttpMyQuranLocationResponse>;
  abstract GetLocationById(
    params: string
  ): Observable<HttpMyQuranLocationByIdResponse>;
}
