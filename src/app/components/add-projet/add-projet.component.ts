import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {
  etat= ['en cours','achevé'];
  addProjetForm: any;
  projet:any={};
  constructor( private formBuilder:FormBuilder,
    private projetService:ProjetService,private router:Router  ) { }

  ngOnInit() {
    this.addProjetForm=this.formBuilder.group(
      {
       code:[''],
       libelle:[''],
       description:[''],
       datedebut:[''],
       datefin:[''],
       etat:['']
      
      }
    )
  }
   addProjet(){
     this.projetService.addProjet(this.projet).subscribe (
       ()=>{
         this.router.navigate(['gestionprojets']);
      }
    )
  }    

}
