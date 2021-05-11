import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projets-table',
  templateUrl: './projets-table.component.html',
  styleUrls: ['./projets-table.component.css']
})
export class ProjetsTableComponent implements OnInit {
  projets:any;
  constructor(private router:Router,private projetService:ProjetService) { }

  ngOnInit() {
    this.getProjetsFromService();  
  }
  getProjetsFromService() {
    this.projetService.getAllProjets().subscribe((data)=>{
      this.projets=data; 
    })
  }
  goToDisplay(x){
    this.router.navigate([`displayProjet/${x}`])
  }
  goToEdit(x){
    this.router.navigate([`editProjet/${x}`])
  }
  deleteProjet(id){
    this.projetService.deleteProjet(id).subscribe(
      ()=>{
        console.log('Projet deleted successfully');
      
          this.getProjetsFromService();
        
        
      }
    )
  }

}
