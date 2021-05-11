import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {

  id:any;
  video:any={};
  editVideoForm:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private videoService:VideoService,
    private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.videoService.getVideoById(this.id).subscribe(
      (data)=>{
        this.video=data;
      }
    )
  }
  editVideo(){
    this.videoService.updateVideo(this.video).subscribe(
      ()=>{
        this.router.navigate(['gestionvideo']);
      }
    )
    
  }
}
