import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-edit-demande',
  templateUrl: './edit-demande.component.html',
  styleUrls: ['./edit-demande.component.css']
})
export class EditDemandeComponent implements OnInit {

  id:any;
  demande:any={};
  editDemandeForm:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private demandeService:DemandeService,
    private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.demandeService.getDemandeById(this.id).subscribe(
      (data)=>{
        this.demande=data;
      }
    )
  }
  editDemande(){
    this.demandeService.updateDemande(this.demande).subscribe(
      ()=>{
        this.router.navigate(['admin']);
      }
    )
    
  }
}
