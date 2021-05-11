import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AfficheService } from '../services/affiche.service';

@Component({
  selector: 'app-add-affiche',
  templateUrl: './add-affiche.component.html',
  styleUrls: ['./add-affiche.component.css']
})
export class AddAfficheComponent implements OnInit {

  affiche:any={};
  addAfficheForm:FormGroup;
  constructor( private formBuilder:FormBuilder,
     private afficheService:AfficheService,private router:Router  ) { }

  ngOnInit() {

    this.addAfficheForm=this.formBuilder.group(
      {
       dimensions:[''],
       nbrimages:[''],
       couleurs:[''],
       support:[''],
       exemple:['']
         
      }
    )
  }

 addAffiche(){
      this.afficheService.addAffiche(this.affiche).subscribe(
        ()=>{
          this.router.navigate(['affichestable']);
        }
      )
    }     

}
