import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AgGridModule} from "ag-grid-angular";

import { AppComponent }  from './app.component';
import { routing }  from './app.routing';

import { AuthGuard } from './Guards/auth.guard';
import { AuthenticationService} from './Services/authentication.service';
import { UserService } from './Services/user.service';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { SeeBackEndService } from './see-back-end/see-back-end.service';


import { ActionsListComponent } from './Main/ActionsList/actionslist.component';
import { DeleteComponent } from './Main/Delete/delete.component';
import { MailListComponent } from './Main/MailList/maillist.component';
import { SearchComponent } from './Main/Search/search.component';
import { MainComponent } from './Main/main.component';
import { ComposeMailComponent } from './Main/compose-mail/compose-mail.component';
import { UserIdComponent } from './Main/user-id/user-id.component';
import { SentMailComponent } from './Main/sent-mail/sent-mail.component';
import { TrashComponent } from './Main/trash/trash.component';
import { SeeBackEndComponent } from './see-back-end/see-back-end.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        AgGridModule.withComponents(
    [AppComponent,MailListComponent]
)
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,

        ActionsListComponent,

        ActionsListComponent,
        DeleteComponent,
        MailListComponent,
        SearchComponent,
        MainComponent,
        ComposeMailComponent,
        UserIdComponent,
        SentMailComponent,
        TrashComponent,
        SeeBackEndComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        SeeBackEndService
    ],
    exports: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
