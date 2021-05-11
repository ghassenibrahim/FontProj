import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
typeUrl:string ='http://localhost:8080/api/types';
 
constructor(private httpClient:HttpClient) { }
  getAllTypes(){
    return this.httpClient.get(this.typeUrl);
  }
  getTypeById(id){
    return this.httpClient.get(`${this.typeUrl}/${id}`);

  }
addType(type:any){
  return this.httpClient.post(this.typeUrl,type);
}
updateType(type:any){
  return this.httpClient.put(`${this.typeUrl}/${type.id}`,type);
}
deleteType(id:any){
  return this.httpClient.delete(`${this.typeUrl}/${id}`);
}

}
