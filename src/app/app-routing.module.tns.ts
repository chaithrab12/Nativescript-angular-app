import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';

import { AutoGeneratedComponent } from '@src/app/auto-generated/auto-generated.component';
import { ItemComponent } from './item/item.component';

export const routes: Routes = [

  {
      path: '',
      component: AutoGeneratedComponent,
  },
  {
    path:'item',
    component:ItemComponent
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
