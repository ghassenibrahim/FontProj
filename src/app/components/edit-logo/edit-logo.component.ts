import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LogoService } from '../services/logo.service';

@Component({
  selector: 'app-edit-logo',
  templateUrl: './edit-logo.component.html',
  styleUrls: ['./edit-logo.component.css']
})
export class EditLogoComponent implements OnInit {

  id:any;
  logo:any={};
  editLogoForm:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private logoService:LogoService,
    private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.logoService.getLogoById(this.id).subscribe(
      (data)=>{
        this.logo=data;
      }
    )
  }
  editLogo(){
    this.logoService.updateLogo(this.logo).subscribe(
      ()=>{
        this.router.navigate(['gestionlogos']);
      }
    )
    
    }}
