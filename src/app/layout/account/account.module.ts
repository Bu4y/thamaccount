import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountComponent } from "./account.component";
import { AccountRoutingModule } from "./account-routing.module";

import { UiTree } from "../../shared/components/ui-tree/ui-tree";

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [AccountComponent, UiTree]
})
export class AccountModule { }
