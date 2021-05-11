import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videoUrl:string ='http://localhost:8080/api/videos';
  
 
constructor(private httpClient:HttpClient) { }
  getAllVideos(){
    return this.httpClient.get(this.videoUrl);
  }
  getVideoById(id){
    return this.httpClient.get(`${this.videoUrl}/${id}`);

  }
addVideo(video:any){
  return this.httpClient.post(this.videoUrl,video);
}
updateVideo(video:any){
  return this.httpClient.put(`${this.videoUrl}/${video.id}`,video);
}
deleteVideo(id:any){
  return this.httpClient.delete(`${this.videoUrl}/${id}`);
}
}
