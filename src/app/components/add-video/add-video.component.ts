import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  video:any={};
  addVideoForm:FormGroup;

  constructor( private formBuilder:FormBuilder,
     private videoService:VideoService,private router:Router  ) { }

  ngOnInit() {

    this.addVideoForm=this.formBuilder.group(
      {
       duree:[''],
       nbrimages:[''],
       dimensions:[''],
       version:[''],
       couleurs:['']
       
      }
    )
  }

 addVideo(){
      this.videoService.addVideo(this.video).subscribe(
        ()=>{
          this.router.navigate(['espace']);
        }
      )
    }     
}
