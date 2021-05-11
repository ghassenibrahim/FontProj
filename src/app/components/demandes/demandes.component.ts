import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
demandes:any;
  constructor() { }

  ngOnInit() {
    this.demandes=[
      {id:1,nom:'RUNG ',sujet:'gestion des abonnés',date:'12-05-2017',description:'réalisation de ',type:''},
      {id:2,nom:'mouna',sujet:'gestion des abonnés',date:'12-05-2017',description:'effectuer un',type:''},
      {id:3,nom:'BMW'  ,sujet:'conception du logo',date:'12-05-2017',description:'optimiser notre s',type:''}

    ] 


  }

}
