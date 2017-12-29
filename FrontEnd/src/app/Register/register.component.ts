import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../Services/user.service';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    //console.log("I am in Register Component");
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    
                    this.router.navigate(['/login']);
                },
                error => {
                   
                    this.loading = false;
                });
    }
}