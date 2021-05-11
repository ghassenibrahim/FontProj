import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
projets:any;
  constructor() { }

  ngOnInit() {
    this.projets=[
      {id:1,code:'145',nom:'protush',description:'gestion des projets',datedebut:'12/01/2021',datefin:'22/01/2021',etat:'achevé'},
      {id:2,code:'214',nom:'net flex',description:'gestion des produits',datedebut:'10/05/2021',datefin:'20/06/2021',etat:'en cours'},
      {id:3,code:'325',nom:'big data',description:'gestion des taches',datedebut:'6/10/2021',datefin:'7/11/2021',etat:'achevé'}

    ] 
  }

}
