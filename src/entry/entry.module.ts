import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule } from '@clr/angular';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { AssetsExampleComponent } from './assets-example/assets-example.component';
import { ButtonsExampleComponent } from './buttons-example/buttons-example.component';
import { StylesExampleComponent } from './styles-example/styles-example.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    EntryComponent,
    AssetsExampleComponent,
    ButtonsExampleComponent,
    StylesExampleComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    EntryRoutingModule
  ]
})
export class EntryModule { }
