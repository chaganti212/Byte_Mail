import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()

export class SeeBackEndService {


   constructor(private http: Http) {

   }


  getAllUsers() {
    console.log(localStorage);
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new Headers({ 'Authorization': currentUser.token });
    let options = new RequestOptions({ headers: headers });  
    console.log(options);
    return this.http.get('http://localhost:3000/api/getAllUsers', options)
    .map((response: Response) =>{

            console.log(response);
            return response;

        });

  }
}