import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';

export const APP_CONFIG = new InjectionToken<any>('APP_CONFIG');

@NgModule()
export class ConfigModule {
  static forRoot(config: any): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
        {
          provide: APP_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
