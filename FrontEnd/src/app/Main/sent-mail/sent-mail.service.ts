import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
@Injectable()
export class sentservice {
constructor(private http: Http) {}
  sentemaillist() {
    let headers = new Headers({ 'Content-Type': 'application/json',
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiZ2FkZGUubHJAZ21haWwuY29tIiwiRmlyc3ROYW1lIjoiTG9rZXNoIiwiaWF0IjoxNTA5Mzc0MjY0LCJleHAiOjE1MDk0NjA2NjR9.blWEcHhV3LCP2j4JBh5--5Z4nVTUF7r6PvalST1rYn0'});
    let options = new RequestOptions({ headers: headers });
    //let body = JSON.stringify(email);
   
    let temp = this.http.get('http://localhost:3000/api/sentmails', options).map(res => res.json()).subscribe(res => temp = res);
     return temp;
  }
  }
  