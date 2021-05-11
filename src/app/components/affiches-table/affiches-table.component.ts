import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfficheService } from '../services/affiche.service';

@Component({
  selector: 'app-affiches-table',
  templateUrl: './affiches-table.component.html',
  styleUrls: ['./affiches-table.component.css']
})
export class AffichesTableComponent implements OnInit {

  affiches:any;
  constructor(private router:Router,private afficheService:AfficheService) { }

  ngOnInit() {
    this.getAffichesFromService();  
  }
  getAffichesFromService() {
    this.afficheService.getAllAffiches().subscribe((data)=>{
      this.affiches=data; 
  }) }

  goToDisplay(x){
    this.router.navigate([`displayAffiche/${x}`])
  }
  goToEdit(x){
    this.router.navigate([`modifAffiche/${x}`])
  }
  deleteAffiche(id){
    this.afficheService.deleteAffiche(id).subscribe(
      ()=>{
        console.log('Affiche deleted successfully');
      
          this.getAffichesFromService();
        
        
      }
    )
  }
}
