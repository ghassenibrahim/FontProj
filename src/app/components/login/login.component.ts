import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={};
  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private userService: UserService,
    private router: Router) {}

   ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:[''],
      pwd:['']
    });
  }

  login(){
    this.userService.login(this.user).subscribe((data:any) => {
      window.sessionStorage.removeItem('token');
      window.sessionStorage.setItem('token', data.token);
      window.sessionStorage.removeItem('username');
      window.sessionStorage.setItem('username', data.username);
      window.sessionStorage.removeItem('roles');

        this.userService.getuserbyemail(data.username).subscribe((data:any) => {


            window.sessionStorage.removeItem('id');
        window.sessionStorage.setItem('id', data.id);
          },
          (error) => {
            console.log(error)
          }
        );



       if(data.authorities[0].authority==="user")
       {
          window.sessionStorage.setItem('roles', "user");
          this.router.navigate(['/espace']);
        }
        if(data.authorities[0].authority==="admin")
        {
          window.sessionStorage.setItem('roles', "admin");
        this.router.navigate(['/admin']);
        }
      },
      (error) => {
      }
    );
  }
}
