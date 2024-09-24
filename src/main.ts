import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FormsComponent } from './app/forms/forms.component';
import { DynamicFormArrayComponent } from './app/forms/dynamic-form-array/dynamic-form-array.component';
import { FormArraysComponent } from './app/forms/form-arrays/form-arrays.component';
import { FormControlsComponent } from './app/forms/form-controls/form-controls.component';
import { AboutComponent } from './app/pages/general/about/about.component';
import { RunRoutingComponent } from './app/routing/run-routing/run-routing.component';
import { HttpClientComponent } from './app/http-client/http-client.component';
import { RunLfhComponentComponent } from './app/run-lfh-component/run-lfh-component.component';
import { TutorialsListComponent } from './app/frontend-for-tutorial/tutorials-list/tutorials-list.component';
import { RunProjectComponent } from './app/frontend-for-tutorial/run-project/run-project.component';

// bootstrapApplication(RunFrontendTutorialComponent, appConfig).then(ref => {
//   if(window['ngRef']){
//     window['ngRef'].destroy();
//   }
//   window['ngRef'] = ref;
// })
// .catch(err) => console.error(err);

bootstrapApplication(RunProjectComponent, appConfig)
  .catch((err) => console.error(err));
