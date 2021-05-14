import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:string = 'http://localhost:8080/api/users/id/';
  userUrl:string = 'http://localhost:8080/api/users';
  constructor(private httpClient: HttpClient) { }


  addUser(user:any){
    return this.httpClient.post(this.userUrl, user);
  }

  login(user:any){
    return this.httpClient.post('/api/login', user);
  }
  getuserbyemail(email:string){
    return this.httpClient.get(`http://localhost:8080/api/users/email/${email}`);
  }
  getuserbyid(id:number){
    return this.httpClient.get(`http://localhost:8080/api/users/id/${id}`);
  }
}
