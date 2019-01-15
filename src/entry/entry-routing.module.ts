import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntryComponent} from './entry.component';
import {ButtonsExampleComponent} from './buttons-example/buttons-example.component';
import {AssetsExampleComponent} from './assets-example/assets-example.component';
import {StylesExampleComponent} from './styles-example/styles-example.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: EntryComponent,
    children: [
      { path: 'buttons', component: ButtonsExampleComponent },
      { path: 'assets', component: AssetsExampleComponent },
      { path: 'styles', component: StylesExampleComponent },
      { path: '', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule { }
