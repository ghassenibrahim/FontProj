import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoService } from '../services/logo.service';

@Component({
  selector: 'app-logo-admin',
  templateUrl: './logo-admin.component.html',
  styleUrls: ['./logo-admin.component.css']
})
export class LogoAdminComponent implements OnInit {

  logos:any;
  constructor(private router:Router,private logoService:LogoService) { }

  ngOnInit() {
    this.getLogosFromService();  
  }
  getLogosFromService() {
    this.logoService.getAllLogos().subscribe((data)=>{
      this.logos=data; 
  }) }


}
