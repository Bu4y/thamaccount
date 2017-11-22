import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { ComponentModule } from "../../shared/components/components.module";
import { AccountTypeListRoutingModule } from './account-type-list-routing.module';
import { AccountTypeListComponent } from './account-type-list.component';

@NgModule({
  imports: [
    CommonModule,
    AccountTypeListRoutingModule,
    ComponentModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [AccountTypeListComponent]
})
export class AccountTypeListModule { }
