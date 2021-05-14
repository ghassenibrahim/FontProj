import { User } from './../../Models/user';
import { UserService } from './../services/user.service';
import { Demande } from 'src/app/Models/demande';
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
  id: number;
  user:any;
  demande:Demande=new Demande ();
  addDemandeForm:FormGroup;
  types : any []= ["conception logo","vidéo"];
constructor( private formBuilder:FormBuilder,
  private demandeService:DemandeService,private userService:UserService,private router:Router  ) { }
  ngOnInit() {
    this.id=parseInt(sessionStorage.getItem("id"))



    this.getuser()
    }
    getuser(){
      this.userService.getuserbyid(this.id).subscribe(
        data => {
          console.log("duseraaaaaaaaaaaaaaaaaaaa",data)
          this.user=data;
        }
      )
    }
    addDemande(){
     this.demande.user=this.user;
      this.demandeService.addDemande(this.demande).subscribe(
        ()=>{

       localStorage.setItem("libelle",this.demande.libelle);
          this.router.navigate(['gestiondemandes']);
        }
      )
    }

  }


function libelle(arg0: string, libelle: any) {
  throw new Error('Function not implemented.');
}

