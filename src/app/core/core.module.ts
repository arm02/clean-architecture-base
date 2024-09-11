import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { HttpProvider } from './helpers/provider/repository.provider';

// const DATA_SERVICES: Provider[] = MockHttpProvider;
const DATA_SERVICES: Provider[] = HttpProvider;

export const NB_CORE_PROVIDERS = [...DATA_SERVICES];

@NgModule({})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...NB_CORE_PROVIDERS],
    };
  }
}
