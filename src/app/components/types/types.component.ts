import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
types:any;
  constructor() { }

  ngOnInit() {

    this.types=[

      {id:1,libelle:'mouna',description:'bedoui'},
      {id:2,libelle:'majda',description:'bedoui'},
      {id:3,libelle:'manel',description:'bedoui'}
      

    ] 

}

}
