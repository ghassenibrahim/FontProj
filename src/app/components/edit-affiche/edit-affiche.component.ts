import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AfficheService } from '../services/affiche.service';

@Component({
  selector: 'app-edit-affiche',
  templateUrl: './edit-affiche.component.html',
  styleUrls: ['./edit-affiche.component.css']
})
export class EditAfficheComponent implements OnInit {
  id:any;
  affiche:any={};
  editAfficheForm:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private afficheService:AfficheService,
    private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.afficheService.getAfficheById(this.id).subscribe(
      (data)=>{
        this.affiche=data;
      }
    )
  }
  editAffiche(){
    this.afficheService.updateAffiche(this.affiche).subscribe(
      ()=>{
        this.router.navigate(['espace']);
      }
    )
    
    }}

