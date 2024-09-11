import { Component, OnInit } from '@angular/core';
import { TableDisplayedColumn } from 'src/app/core/domain/entities/table.entity';
import { MyQuranGetLocationDTO } from 'src/app/core/usecase/myquran/location/interface/myquran-get-location.dto';
import { MyQuranGetAllLocationUsecase } from 'src/app/core/usecase/myquran/location/myquran-get-all-location.usecase';
import { MyQuranGetLocationByIdUsecase } from 'src/app/core/usecase/myquran/location/myquran-get-location-by-id.usecase';
import {
  CreatePayload,
  HttpMyQuranLocationByIdResponse,
  HttpMyQuranLocationCollection,
  HttpMyQuranLocationResponse,
  MyQuranLocationDisplayedColumn,
} from 'src/app/data/repository/myquran/http-myquran.collection';

@Component({
  selector: 'app-first-menu-modules',
  templateUrl: './first-menu-modules.component.html',
  styleUrls: ['./first-menu-modules.component.scss'],
})
export class FirstMenuModulesComponent implements OnInit {
  location: HttpMyQuranLocationCollection[] = [];
  query = '';
  displayedColumn: TableDisplayedColumn[] = MyQuranLocationDisplayedColumn;
  singleLocation: HttpMyQuranLocationCollection = {
    id: '',
    lokasi: '',
    status: '',
  };
  createPayload = new CreatePayload();
  constructor(
    private myQuranLocationUseCase: MyQuranGetAllLocationUsecase,
    private myQuranSingleLocationUseCase: MyQuranGetLocationByIdUsecase
  ) {}

  ngOnInit(): void {
    // this.GetLocation();
  }

  GetLocation() {
    const params: MyQuranGetLocationDTO = {
      keyword: this.query,
    };
    this.myQuranLocationUseCase.execute(params).subscribe({
      next: (response: HttpMyQuranLocationResponse) => {
        this.location = response.data;
      },
    });
  }

  GetSingleLocation(params: string | number | any) {
    console.log(params);
    this.location[params].status = 'unpaid';
    // this.myQuranSingleLocationUseCase.execute(params).subscribe({
    //   next: (response: HttpMyQuranLocationByIdResponse) => {
    //     this.singleLocation = response.data;
    //   },
    // });
  }

  Save() {
    this.location.push(this.createPayload);
    console.log(this.createPayload);
  }
}
