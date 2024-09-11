import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/base/usecase';
import { MyQuranRepository } from 'src/app/core/repository/myquran.repository';
import { HttpMyQuranLocationByIdResponse } from 'src/app/data/repository/myquran/http-myquran.collection';

@Injectable({
  providedIn: 'root',
})
export class MyQuranGetLocationByIdUsecase
  implements UseCase<string, HttpMyQuranLocationByIdResponse>
{
  constructor(private repository: MyQuranRepository) {}

  execute(params: string): Observable<HttpMyQuranLocationByIdResponse> {
    return this.repository.GetLocationById(params);
  }
}
