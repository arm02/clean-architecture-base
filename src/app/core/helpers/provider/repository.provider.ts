import { HttpMyQuranRepository } from 'src/app/data/repository/myquran/http-myquran.repository';
import { MyQuranRepository } from '../../repository/myquran.repository';

export const HttpProvider = [
  {
    provide: MyQuranRepository,
    useClass: HttpMyQuranRepository,
  },
];
