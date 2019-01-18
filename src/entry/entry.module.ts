import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    EntryComponent,
    AssetsExampleComponent,
    ButtonsExampleComponent,
    StylesExampleComponent,
    SharedExampleComponent,
    DashboardComponent,
    DashboardComponent,
    ButtonComponent,
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
  entryComponents: [
    ButtonComponent,
  ]
})
export class EntryModule {
  constructor(private injector: Injector) {
    this.defineCustomElement('ko-button', ButtonComponent);
  }

  private defineCustomElement(customElementTitle, component) {
    if (customElements.get(customElementTitle)) {
      return;
    }
    const customElement = createCustomElement(component, {
      injector: this.injector
    });
    customElements.define('ko-button', customElement);
  }
}
