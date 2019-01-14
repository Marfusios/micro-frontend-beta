import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { AssetsExampleComponent } from './assets-example/assets-example.component';

@NgModule({
  declarations: [
    EntryComponent,
    AssetsExampleComponent
  ],
  imports: [
    CommonModule,
    EntryRoutingModule
  ]
})
export class EntryModule { }
