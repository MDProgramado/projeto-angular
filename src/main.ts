import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import 'bootstrap-icons/font/bootstrap-icons.css';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  
  bootstrapApplication(LoginComponent)
  .catch((err) => console.error(err));
