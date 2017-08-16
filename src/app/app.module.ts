import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserXhr } from '@angular/http';
import { LoginService } from "./login/login.service";
import { SignupService } from "./signup/signup.service";
import { ContactCreateService } from "./layout/contact-create/contact-create.service";
import { ContactListsService } from "./layout/contact-lists/contact-lists.service";
import { ExpendCreateService } from "./layout/expend-create/expend-create.service";
import { ExpendListsService } from "./layout/expend-lists/expend-lists.service";
import { AccountCreateService } from "./layout/account-create/account-create.service";
import { AccountService } from "./layout/account/account.service";
import { JvCreateService } from "./layout/jv-create/jv-create.service";
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        NgProgressModule,
        HttpModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    providers: [{ provide: BrowserXhr, useClass: NgProgressBrowserXhr }, AuthGuard, LoginService, SignupService, ContactCreateService, ContactListsService, ExpendCreateService, ExpendListsService, AccountCreateService, AccountService, JvCreateService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
