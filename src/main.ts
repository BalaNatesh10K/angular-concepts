import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FormsComponent } from './app/forms/forms.component';
import { DynamicFormArrayComponent } from './app/dynamic-form-array/dynamic-form-array.component';
import { FormArraysComponent } from './app/form-arrays/form-arrays.component';
import { FormControlsComponent } from './app/form-controls/form-controls.component';
import { AboutComponent } from './app/pages/general/about/about.component';
import { RunRoutingComponent } from './app/run-routing/run-routing.component';

bootstrapApplication(RunRoutingComponent, appConfig)
  .catch((err) => console.error(err));
