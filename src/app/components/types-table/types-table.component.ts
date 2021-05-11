import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeService } from '../services/type.service';

 @Component({
  selector: 'app-types-table',
  templateUrl: './types-table.component.html',
  styleUrls: ['./types-table.component.css']
})
export class TypesTableComponent implements OnInit {
  types:any;
  constructor(private router:Router,private typeService:TypeService) { }

  ngOnInit() {
    this.getTypesFromService();  
  }
  getTypesFromService() {
    this.typeService.getAllTypes().subscribe((data)=>{
      this.types=data; 
  }) }

  goToEdit(x){
    this.router.navigate([`modifType/${x}`])
  }
  deleteType(id){
    this.typeService.deleteType(id).subscribe(
      ()=>{
        console.log('Type deleted successfully');
      
          this.getTypesFromService();
        
        
      }
    )
  }

}
