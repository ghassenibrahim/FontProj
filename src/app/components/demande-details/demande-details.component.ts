import { TemplateEmail } from './../../Models/EmailTemplate';
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
  email:TemplateEmail;
  emailrejet:TemplateEmail;

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

acceptdemande(){
this.email=new TemplateEmail();
this.email.sendTo=this.demande.user.email;
this.email.subject="accept"
this.email.body=" votre demande a été accepte"
this.demandeservice.reponsedemande(this.email).subscribe(
  data=>{this.router.navigate(["/gestiondemandes"])},
  err=>{
    this.router.navigate(["/gestiondemandes"]),
    console.log(err)

  }

)

}

rejectdemande(){
  this.emailrejet=new TemplateEmail();
  this.emailrejet.sendTo=this.demande.user.email
  this.emailrejet.subject="reject"
  this.emailrejet.body=" votre demande a été refusé"
  this.demandeservice.reponsedemande(this.emailrejet).subscribe(
    data=>{
      this.router.navigate(["/gestiondemandes"])},
    err=>{
      this.router.navigate(["/gestiondemandes"]),
      console.log(err)

    }

  )

  }
  }


