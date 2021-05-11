import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService  implements InMemoryDbService {

  constructor() { }

  createDb(){
    let  types =  [
     
      {id:1,libelle:'mouna',description:'bedoui',exemple:'face1.jpg'},
      {id:2,libelle:' majda',description:'bedoui',exemple:'face2.jpg'},
      {id:3,libelle:'manel',description:'bedoui',exemple:'face3.jpg'}


      ] ;

      let  demandes =  [
        {id:1,libelle:'RUNG ',sujet:'gestion des abonnés',date:'12-05-2017',description:'réalisation de ',type:''},
        {id:2,libelle:'mouna',sujet:'gestion des abonnés',date:'12-05-2017',description:'effectuer un',type:''},
        {id:3,libelle:'BMW'  ,sujet:'conception du logo',date:'12-05-2017',description:'optimisers',type:''}
        ] ;
        
         let projets = [
          {id:1,code:'145',libelle:'protush',description:'gestion des projets',datedebut:'12/01/2021',datefin:'22/01/2021',etat:'achevé'},
          {id:2,code:'214',libelle:'net flex',description:'gestion des produits',datedebut:'10/05/2021',datefin:'20/06/2021',etat:'en cours'},
          {id:3,code:'325',libelle:'big data',description:'sgestion des taches',datedebut:'6/10/2021',datefin:'7/11/2021',etat:'achevé'}
    
        ] 
    return {types,demandes,projets};
 
   }
}
