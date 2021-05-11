import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-display-demande',
  templateUrl: './display-demande.component.html',
  styleUrls: ['./display-demande.component.css']
})
export class DisplayDemandeComponent implements OnInit {

 
  id:any;
  demande:any;
    constructor(private activatedRoute:ActivatedRoute,
      private demandeService:DemandeService) { }
  
    ngOnInit() {
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.demandeService.getDemandeById(this.id).subscribe(
      (data)=>{
        this.demande=data;
      }
    )
    }

}
