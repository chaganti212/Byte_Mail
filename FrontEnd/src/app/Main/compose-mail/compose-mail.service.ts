import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
@Injectable()
export class emailservice {
constructor(private http: Http) {}
  createemail(email) {
    let headers = new Headers({ 'Content-Type': 'application/json',
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoiZ2FkZGUubHJAZ21haWwuY29tIiwiRmlyc3ROYW1lIjoiTG9rZXNoIiwiaWF0IjoxNTA5MTE2MjUyLCJleHAiOjE1MDkyMDI2NTJ9.5mYhzduD-mYH05cI8clQM7UR92zT14h5S5TVw6ViRGs'});
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(email);
    debugger;
    this.http.post('http://localhost:3000/api/sendmail', body, options )
    .map(res =>console.log(res))
    .subscribe(
    
    ()=>console.log(body))
    return true;
  }
  }