import { TemplateEmail } from './../../Models/EmailTemplate';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demande } from 'src/app/Models/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  demandeUrl:string='http://localhost:8080/api/demandes';
  demandeurl:string='http://localhost:8080/api/demandes/demande';
  emailform:string='http://localhost:8080/v1/notification/textemail'

  constructor(private httpClient:HttpClient) { }

  getAllDemandes(){
    return this.httpClient.get(this.demandeUrl);
  }
reponsedemande(templateemail:TemplateEmail){
  return this.httpClient.post(this.emailform,templateemail);

}
  getDemandeById(id): Observable<any>{
    return this.httpClient.get(`${this.demandeUrl}/${id}`);
  }
  getDemandeByUserId(id){
    return this.httpClient.get(`${this.demandeUrl}/${id}`);
  }
  getAllDemandeSent(id){
    return this.httpClient.get(`${this.demandeurl}/${id}`);
  }


addDemande(demande:any){
  return this.httpClient.post(this.demandeUrl,demande);
}
  updateDemande(demande:any){
    return this.httpClient.put(`${this.demandeUrl}/${demande.id}`,demande);
  }
  deleteDemande(id:any){
    return this.httpClient.delete(`${this.demandeUrl}/${id}`);
  }
}

