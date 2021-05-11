import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-admin',
  templateUrl: './video-admin.component.html',
  styleUrls: ['./video-admin.component.css']
})
export class VideoAdminComponent implements OnInit {

  videos:any;
  constructor(private router:Router,private videoService:VideoService) { }

  ngOnInit() {
    this.getVideosFromService();  
  }
  getVideosFromService() {
    this.videoService.getAllVideos().subscribe((data)=>{
      this.videos=data; 
  }) }

}
