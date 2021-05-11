import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeService } from '../services/type.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {
  type:any={};
  addTypeForm:FormGroup;

  constructor( private formBuilder:FormBuilder,
     private typeService:TypeService,private router:Router  ) { }
    

  ngOnInit() {
    this.addTypeForm=this.formBuilder.group(
      {
       libelle:[''],
       description:['']
       
      }
    ) }
    
      
    addType(){
      this.typeService.addType(this.type).subscribe(
        ()=>{
          this.router.navigate(['admin']);
        }
      )
    }     

}
