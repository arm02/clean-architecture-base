import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/base/usecase';
import { MyQuranRepository } from 'src/app/core/repository/myquran.repository';
import { HttpMyQuranLocationResponse } from 'src/app/data/repository/myquran/http-myquran.collection';
import { MyQuranGetLocationDTO } from './interface/myquran-get-location.dto';

@Injectable({
  providedIn: 'root',
})
export class MyQuranGetAllLocationUsecase
  implements UseCase<MyQuranGetLocationDTO, HttpMyQuranLocationResponse>
{
  constructor(private repository: MyQuranRepository) {}

  execute(
    params: MyQuranGetLocationDTO
  ): Observable<HttpMyQuranLocationResponse> {
    if (params.keyword) {
      return this.repository.GetLocationByKeyword(params.keyword);
    }
    return this.repository.GetLocation();
  }
}
