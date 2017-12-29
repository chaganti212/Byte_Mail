import { Component, OnInit } from '@angular/core';
import { SeeBackEndService } from './see-back-end.service'

@Component({
  selector: 'app-see-back-end',
  templateUrl: './see-back-end.component.html',
  styleUrls: ['./see-back-end.component.css']
})
export class SeeBackEndComponent implements OnInit {
  users: any = {};
  constructor(private seebackendservice : SeeBackEndService) { }

  ngOnInit() {
    console.log("see backend is initialized.");
    this.seebackendservice.getAllUsers().subscribe(data => {
                    this.users = data["_body"];
                },
                error => {
                    console.log("error " + error);
                });
  }

}
