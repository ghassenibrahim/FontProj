import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  logoUrl:string ='http://localhost:8080/api/logos';
  
 
constructor(private httpClient:HttpClient) { }
  getAllLogos(){
    return this.httpClient.get(this.logoUrl);
  }
  getLogoById(id){
    return this.httpClient.get(`${this.logoUrl}/${id}`);

  }
addLogo(logo:any){
  return this.httpClient.post(this.logoUrl,logo);
}
updateLogo(logo:any){
  return this.httpClient.put(`${this.logoUrl}/${logo.id}`,logo);
}
deleteLogo(id:any){
  return this.httpClient.delete(`${this.logoUrl}/${id}`);
}
}
