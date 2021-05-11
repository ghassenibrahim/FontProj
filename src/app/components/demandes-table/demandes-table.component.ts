import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-demandes-table',
  templateUrl: './demandes-table.component.html',
  styleUrls: ['./demandes-table.component.css']
})
export class DemandesTableComponent implements OnInit {
  demandes:any;
  id:number;
  constructor(private router:Router,private demandeService:DemandeService) {}


  ngOnInit() {
     this.getDemandesFromService();
     this.id=parseInt(sessionStorage.getItem("id"))
     this.getDemandesFromService();
  }
  getDemandesFromService() {
    this.demandeService.getAllDemandeSent(this.id).subscribe((data)=>{
      this.demandes=data;
      console.log(this.demandes)
    }) }
    goToEdit(x){
      this.router.navigate([`editDemande/${x}`])
    }

}
