import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoService } from '../services/logo.service';

@Component({
  selector: 'app-logos-table',
  templateUrl: './logos-table.component.html',
  styleUrls: ['./logos-table.component.css']
})
export class LogosTableComponent implements OnInit {
  logos:any;
  constructor(private router:Router,private logoService:LogoService) { }

  ngOnInit() {
    this.getLogosFromService();  
  }
  getLogosFromService() {
    this.logoService.getAllLogos().subscribe((data)=>{
      this.logos=data; 
  }) }

  goToDisplay(x){
    this.router.navigate([`displayLogo/${x}`])
  }
  goToEdit(x){
    this.router.navigate([`modifLogo/${x}`])
  }
  deleteLogo(id){
    this.logoService.deleteLogo(id).subscribe(
      ()=>{
        console.log('Logo deleted successfully');
      
          this.getLogosFromService();
        
        
      }
    )
  }

}
