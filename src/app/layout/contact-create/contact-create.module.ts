import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactListsRoutingModule } from "./contact-create-routing.module";
import { ContactCreateComponent } from "./contact-create.component";

@NgModule({
  imports: [
    CommonModule,
    ContactListsRoutingModule
  ],
  declarations: [ContactCreateComponent]
})
export class ContactCreateModule { }
