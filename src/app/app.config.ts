import { ApplicationConfig, NgZone } from '@angular/core';
import { provideRouter } from '@angular/router';

import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTES),{
    provide: NgZone,
    useValue: new NgZone({ shouldCoalesceEventChangeDetection: false })
},]
};
