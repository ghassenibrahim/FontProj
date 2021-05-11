import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:any={};
  signupForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder,private router:Router, private userService: UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      nom:['',[Validators.minLength(4),Validators.required]],
      prenom:['',[Validators.minLength(5),Validators.required]],
      telephone:['',[Validators.maxLength(8),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      pwd:['',[Validators.minLength(8),Validators.required]],
      confirmpwd:['']
       
    })
  }

  signup(){
    this.userService.addUser(this.signupForm.value).subscribe(data => {
 this.router.navigate(["/login"])
    })
    
  }
}
