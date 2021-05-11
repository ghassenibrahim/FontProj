import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeService } from '../services/type.service';

@Component({
  selector: 'app-edit-type',
  templateUrl: './edit-type.component.html',
  styleUrls: ['./edit-type.component.css']
})
export class EditTypeComponent implements OnInit {
  id:any;
  type:any={};
  editTypeForm:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private typeService:TypeService,
    private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.typeService.getTypeById(this.id).subscribe(
      (data)=>{
        this.type=data;
      }
    )
  }
  editType(){
    this.typeService.updateType(this.type).subscribe(
      ()=>{
        this.router.navigate(['gestiontypes']);
      }
    )
    
  }
}
