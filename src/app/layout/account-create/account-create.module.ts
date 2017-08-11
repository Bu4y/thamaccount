import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountCreateRoutingModule } from "./account-create-routing.module";
import { AccountCreateComponent } from "./account-create.component";

@NgModule({
  imports: [
    CommonModule,
    AccountCreateRoutingModule,
    FormsModule
  ],
  declarations: [AccountCreateComponent]
})
export class AccountCreateModule { }
