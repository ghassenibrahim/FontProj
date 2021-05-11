import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetService { 

  projetUrl:string='/api/projets';
  
  constructor(private httpClient:HttpClient) { }
  
  getAllProjets(){
    return this.httpClient.get(this.projetUrl);
  }
  getProjetById(id){
    return this.httpClient.get(`${this.projetUrl}/${id}`);

  }
 addProjet(projet:any){
  return this.httpClient.post(this.projetUrl,projet);
}
updateProjet(projet:any){
  return this.httpClient.put(`${this.projetUrl}/${projet.id}`,projet);
}
deleteProjet(id:any){
  return this.httpClient.delete(`${this.projetUrl}/${id}`);
}
searchById(id:String){
  //return this.httpClient.post(`${this.matchUrl}/search`,team); par le post plus sécurisé
  return this.httpClient.get(`${this.projetUrl}/${id}`);

}
}
