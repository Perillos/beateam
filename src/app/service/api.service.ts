import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public BaseURL: string = 'https://www.azurglobal.es/apiPracticas/'

  constructor(private httpClient: HttpClient) { }



  public getTareas() {
    return this.httpClient.get(this.BaseURL, {
      headers: {'X-Auth':'cef900641a4c78146d16ad134040de77ff29b0fbc9844d07596b246b3a8bb5c16058cca19c52218dc29e08bfdfaca885','funcion':'getTareas'}
    })
  }
  // public getTareas() {
  //   return this.httpClient.get(this.BaseURL)
  // }
}
