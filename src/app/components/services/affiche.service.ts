import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfficheService {

  afficheUrl:string ='http://localhost:8080/api/affiches';
  
 
constructor(private httpClient:HttpClient) { }
  getAllAffiches(){
    return this.httpClient.get(this.afficheUrl);
  }
  getAfficheById(id){
    return this.httpClient.get(`${this.afficheUrl}/${id}`);

  }
addAffiche(affiche:any){
  return this.httpClient.post(this.afficheUrl,affiche);
}
updateAffiche(affiche:any){
  return this.httpClient.put(`${this.afficheUrl}/${affiche.id}`,affiche);
}
deleteAffiche(id:any){
  return this.httpClient.delete(`${this.afficheUrl}/${id}`);
}
}
