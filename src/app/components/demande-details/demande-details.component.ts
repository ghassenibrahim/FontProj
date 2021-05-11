import { User } from './../../Models/user';
import { DemandeService } from './../services/demande.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Demande } from './../../Models/demande';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demande-details',
  templateUrl: './demande-details.component.html',
  styleUrls: ['./demande-details.component.css']
})
export class DemandeDetailsComponent implements OnInit {
  id: number;
  demande: Demande;
  user:User;

  constructor(private route: ActivatedRoute,private router: Router,
    private demandeservice:DemandeService) { }

  ngOnInit() {
    this.demande= new Demande();
    this.user= new User ();
    this.id = this.route.snapshot.params['id'];
    this.demandeservice.getDemandeById(this.id)
    .subscribe(data => {
      console.log("details",data)
      this.demande=data;
      this.user=data.user;
      console.log("user_detail", this.user)

    }, error => console.log(error));
}

  }


