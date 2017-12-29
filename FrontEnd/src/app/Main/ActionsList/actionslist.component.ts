import { Component } from '@angular/core';

@Component({
  selector: 'actions-list',
  templateUrl: './actionslist.component.html',
})
export class ActionsListComponent  {
    actionslist: any ={};
    ngOnInit(){
        console.log("I am in init actionslist");
        this.actionslist.inbox = true;
        this.actionslist.SentMail = false;
        this.actionslist.trash = false;
        console.log(this.actionslist);
    }

    onClick(value):void{
        console.log(value);
        if(value == 'inbox')
            this.actionslist.inbox = true;
        
        else if(value == 'SentMail'){
            this.actionslist.SentMail = false;
            this.actionslist.inbox = false;
        }
            
        else if(value == 'trash'){
            this.actionslist.inbox = false;
            this.actionslist.trash = false;
        }
            

        console.log(this.actionslist);
    }
 }