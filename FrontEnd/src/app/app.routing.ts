import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { MainComponent } from './Main/main.component';
import { MailListComponent } from './Main/MailList/maillist.component';
import { ActionsListComponent } from './Main/ActionsList/actionslist.component';
import { DeleteComponent } from './Main/Delete/delete.component';
import { SearchComponent } from './Main/Search/search.component';
import { AuthGuard } from './Guards/auth.guard';
import { ComposeMailComponent } from './Main/compose-mail/compose-mail.component';
import { UserIdComponent } from './Main/user-id/user-id.component';
import { SentMailComponent } from './Main/sent-mail/sent-mail.component';
import { TrashComponent } from './Main/trash/trash.component';
import { SeeBackEndComponent } from './see-back-end/see-back-end.component'
// import { DemoComponent } from './Calendar/component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'actionslist', component:ActionsListComponent},
    { path: 'delete', component:DeleteComponent},
    { path: 'search' , component: SearchComponent},
    { path: 'maillist', component:MailListComponent},


    {path: '', redirectTo: '/login', pathMatch: 'full' },

    { path: 'main', component:MainComponent, children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      { path: 'inbox', component: MailListComponent },
      { path: 'sent-mail', component: SentMailComponent },
      { path: 'trash', component:TrashComponent}
    ] },


    { path: 'main', component:MainComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'composemail', component: ComposeMailComponent},
    {path: 'seebackend', component: SeeBackEndComponent}

];
export const routing = RouterModule.forRoot(appRoutes);
