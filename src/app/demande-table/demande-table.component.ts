import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeService } from '../components/services/demande.service';

@Component({
  selector: 'app-demande-table',
  templateUrl: './demande-table.component.html',
  styleUrls: ['./demande-table.component.css']
})
export class DemandeTableComponent implements OnInit {

  demandes:any;
  id:number;

  constructor(private router:Router,private demandeService:DemandeService) {}

  ngOnInit() {
    this.id=parseInt(sessionStorage.getItem("id"))
    this.getDemandesFromService();
 }
 getDemandesFromService() {
   this.demandeService.getAllDemandeSent(this.id).subscribe((data)=>{
     this.demandes=data;
     console.log("demandes",this.demandes)
   }) }
    goToEdit(x){
      this.router.navigate([`editDemande/${x}`])
    }
    goToDisplay(x){
      this.router.navigate([`displaydemande/${x}`])
    }

    deleteDemande(id){
      this.demandeService.deleteDemande(id).subscribe(
        ()=>{
          console.log('deleted successfully');

          this.getDemandesFromService();


        }
      )
    }




}
