import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetsExampleComponent } from './assets-example/assets-example.component';
import { ButtonsExampleComponent } from './buttons-example/buttons-example.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryComponent } from './entry.component';
import { SharedExampleComponent } from './shared-example/shared-example.component';
import { StylesExampleComponent } from './styles-example/styles-example.component';
import { WebcomponentsExampleComponent } from './webcomponents-example/webcomponents-example.component';

const routes: Routes = [
  {
    path: '',
    component: EntryComponent,
    children: [
      { path: 'buttons', component: ButtonsExampleComponent },
      { path: 'assets', component: AssetsExampleComponent },
      { path: 'styles', component: StylesExampleComponent },
      { path: 'shared', component: SharedExampleComponent },
      { path: 'webcomponents', component: WebcomponentsExampleComponent },
      { path: '', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule { }
