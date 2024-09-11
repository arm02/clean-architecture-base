import { MyQuranResponseEntity } from 'src/app/core/domain/entities/myquran-response.entity';
import { TableDisplayedColumn } from 'src/app/core/domain/entities/table.entity';

export type HttpMyQuranLocationResponse = MyQuranResponseEntity<
  HttpMyQuranLocationCollection[]
>;

export type HttpMyQuranLocationByIdResponse =
  MyQuranResponseEntity<HttpMyQuranLocationCollection>;

export interface HttpMyQuranLocationCollection {
  id: string;
  lokasi: string;
  status: string;
}

export class CreatePayload {
  id = '';
  lokasi = '';
  status = 'paid';
}

export const MyQuranLocationDisplayedColumn: TableDisplayedColumn[] = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'lokasi',
    label: 'Lokasi',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'action',
    label: 'Lihat Detail',
  },
];
