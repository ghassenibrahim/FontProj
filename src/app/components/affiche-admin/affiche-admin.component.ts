import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfficheService } from '../services/affiche.service';

@Component({
  selector: 'app-affiche-admin',
  templateUrl: './affiche-admin.component.html',
  styleUrls: ['./affiche-admin.component.css']
})
export class AfficheAdminComponent implements OnInit {

  affiches:any;
  constructor(private router:Router,private afficheService:AfficheService) { }

  ngOnInit() {
    this.getAffichesFromService();  
  }
  getAffichesFromService() {
    this.afficheService.getAllAffiches().subscribe((data)=>{
      this.affiches=data; 
  }) }

}
