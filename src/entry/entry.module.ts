import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { StoreModule } from '@ngrx/store';

import { GlobalModule } from '../global/global.module';
import { ComponentsModule } from '../shared';
import { AssetsExampleComponent } from './assets-example/assets-example.component';
import { ButtonsExampleComponent } from './buttons-example/buttons-example.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { SharedExampleComponent } from './shared-example/shared-example.component';
import { StateExampleComponent } from './state-example/state-example.component';
import { StylesExampleComponent } from './styles-example/styles-example.component';
import { WebcomponentsExampleComponent } from './webcomponents-example/webcomponents-example.component';

@NgModule({
  declarations: [
    EntryComponent,
    AssetsExampleComponent,
    ButtonsExampleComponent,
    StylesExampleComponent,
    SharedExampleComponent,
    DashboardComponent,
    DashboardComponent,
    WebcomponentsExampleComponent,
    StateExampleComponent,
  ],
  imports: [
    ClarityModule,
    EntryRoutingModule,
    GlobalModule,
    ComponentsModule,
    StoreModule.forRoot({}),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class EntryModule {
  constructor() {
    this.loadExternalScript('http://mkotas.cz/micro-frontend-webcomponents/bundle.min.js');
  }

  private loadExternalScript(scriptUrl) {
    let scriptExist = false;
    document.querySelectorAll('script').forEach(s => {
      if (s.src === scriptUrl) {
        scriptExist = true;
      }
    });

    if (scriptExist) {
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptUrl;
    document.body.appendChild(script);
  }
}
