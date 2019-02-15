import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../shared';

import { Beta2ExampleComponent } from '../entry/beta2-example/beta2-example.component';

const globalComponents = [
  Beta2ExampleComponent,
];

@NgModule({
  declarations: [
    ...globalComponents,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports: [
    ...globalComponents,
  ]
})
export class GlobalModule {

}
