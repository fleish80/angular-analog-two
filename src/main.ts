import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { routes } from '@analogjs/router';

console.log(routes);

bootstrapApplication(AppComponent, appConfig);
