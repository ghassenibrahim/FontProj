import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LogoService } from '../services/logo.service';

@Component({
  selector: 'app-add-logo',
  templateUrl: './add-logo.component.html',
  styleUrls: ['./add-logo.component.css']
})
export class AddLogoComponent implements OnInit {

  logo:any={};
  addLogoForm:FormGroup;

  constructor( private formBuilder:FormBuilder,
     private logoService:LogoService,private router:Router  ) { }

  ngOnInit() {

    this.addLogoForm=this.formBuilder.group(
      {
      
       dimensions:[''],
       couleurs:[''],
       support:[''],
       version:[''],
       typel:[''],
       exemple:['']
       
      }
    )
  }

 addLogo(){
      this.logoService.addLogo(this.logo).subscribe(
        ()=>{
          this.router.navigate(['logostable']);
        }
      )
    } 

}
