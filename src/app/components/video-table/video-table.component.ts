import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-table',
  templateUrl: './video-table.component.html',
  styleUrls: ['./video-table.component.css']
})
export class VideoTableComponent implements OnInit {

  videos:any;
  constructor(private router:Router,private videoService:VideoService) { }

  ngOnInit() {
    this.getVideosFromService();  
  }
  getVideosFromService() {
    this.videoService.getAllVideos().subscribe((data)=>{
      this.videos=data; 
  }) }
  
  goToDisplay(x){
    this.router.navigate([`displayVideo/${x}`])
  }
  goToEdit(x){
    this.router.navigate([`modifVideo/${x}`])
  }
  deleteVideo(id){
    this.videoService.deleteVideo(id).subscribe(
      ()=>{
        console.log('Video deleted successfully');
      
          this.getVideosFromService();
        
        
      }
    )
  }}