import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule } from '@clr/angular';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { AssetsExampleComponent } from './assets-example/assets-example.component';
import { ButtonsExampleComponent } from './buttons-example/buttons-example.component';
import { StylesExampleComponent } from './styles-example/styles-example.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryModule as ComponentsModule } from 'micro-frontend-shared/src/entry/entry.module';
import { SharedExampleComponent } from './shared-example/shared-example.component';

@NgModule({
  declarations: [
    EntryComponent,
    AssetsExampleComponent,
    ButtonsExampleComponent,
    StylesExampleComponent,
    SharedExampleComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ClarityModule,
    EntryRoutingModule,
  ]
})
export class EntryModule { }
