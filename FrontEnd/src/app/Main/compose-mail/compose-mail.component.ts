import { Component, OnInit } from '@angular/core';
import { emailservice } from './compose-mail.service';
import { email } from './Email';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.css'],
  providers: [emailservice]
})

export class ComposeMailComponent{

Email= new email();
constructor(private EmailService: emailservice) {}
sendemail(Email){
this.EmailService.createemail(Email);
console.log(Email);
}
}
