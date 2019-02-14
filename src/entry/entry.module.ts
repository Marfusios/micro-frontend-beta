import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ComponentsModule } from '../shared';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { AssetsExampleComponent } from './assets-example/assets-example.component';
import { ButtonsExampleComponent } from './buttons-example/buttons-example.component';
import { StylesExampleComponent } from './styles-example/styles-example.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedExampleComponent } from './shared-example/shared-example.component';
import { WebcomponentsExampleComponent } from './webcomponents-example/webcomponents-example.component';
import { StateExampleComponent } from './state-example/state-example.component';

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
    CommonModule,
    ComponentsModule,
    ClarityModule,
    EntryRoutingModule
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
