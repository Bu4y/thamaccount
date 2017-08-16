import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { AccountHeaderComponent } from "./account-header/account-header.component";
import { AccountDebitComponent } from './account-debit/account-debit.component';
import { AccountDropdownComponent } from './account-dropdown/account-dropdown.component';
import { AccountCreditComponent } from './account-credit/account-credit.component';
@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        DateValueAccessorModule
    ],
    declarations: [AccountHeaderComponent, AccountDebitComponent, AccountDropdownComponent, AccountCreditComponent],
    exports: [AccountHeaderComponent, AccountDebitComponent, AccountCreditComponent]
})
export class ComponentModule { }
