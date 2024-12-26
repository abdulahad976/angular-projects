import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisIntegrationService {

  constructor() { }

  http = inject(HttpClient)

  public url : string = 'http://localhost:3000/api/users'
  public newUrl : string = 'http://localhost:3000/api/user'


  getData() {
    return this.http.get(this.url)
  }

  addUser(data:any){
    return this.http.post(this.newUrl,data)
  }

}
