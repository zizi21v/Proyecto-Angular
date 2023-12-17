import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {SaludoComponent} from './app/saludo/saludo.component';


bootstrapApplication(SaludoComponent, appConfig)
  .catch((err) => console.error(err));
