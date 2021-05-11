import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeService } from '../services/demande.service';
@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.css']
})
export class AddDemandeComponent implements OnInit {
  demande:any={};
  addDemandeForm:FormGroup;
types= ['conception logo','vidéo',];
constructor( private formBuilder:FormBuilder,
  private demandeService:DemandeService,private router:Router  ) { }
  ngOnInit() {

    this.addDemandeForm=this.formBuilder.group(
      {
       libelle:[''],
       sujet:[''],
       date:[''],
       description:[''],
       type:['']
      
      }
    ) }
    addDemande(){
      this.demandeService.addDemande(this.demande).subscribe(
        ()=>{
          console.log(this.demande.libelle)
       localStorage.setItem("libelle",this.demande.libelle);
          this.router.navigate(['gestiondemandes']);
        }
      )
    }     

  }


function libelle(arg0: string, libelle: any) {
  throw new Error('Function not implemented.');
}

