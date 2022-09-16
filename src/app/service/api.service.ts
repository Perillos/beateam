import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
// use jsSHA to hash
import  jsSHA  from  "jssha"


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public BaseURL: string = environment.baseURL
  public auth: string = environment.PARTEPRIVADA

  constructor(private httpClient: HttpClient) { }

  // get hash of the day
  public getAuth() {
    const timeDate = Date.now();
    const today = new Date(timeDate);
    const day =  today.getDate()
    const dayNum = day.toString().length==1 ? 0 + day.toString() :  day.toString()
    const month =  today.getMonth() + 1
    const monthNum = month.toString().length==1 ? 0 + month.toString() :  month.toString()
    const year =  today.getFullYear()
    const ymd = `${year}${monthNum}${dayNum}`
    const keyP = environment.PARTEPRIVADA + ymd
    const shaObj = new jsSHA("SHA-384", "TEXT", { encoding: "UTF8" });
    shaObj.update(keyP);
    const hash = shaObj.getHash("HEX");
    return hash
  }


  public getTareas() {
    return this.httpClient.get(this.BaseURL, {
      headers: {
        'X-Auth': this.getAuth(),
        'funcion':'getTareas'}
    })
  }
  public getTipos() {
    return this.httpClient.get(this.BaseURL, {
      headers: {
        'X-Auth': this.getAuth(),
        'funcion':'getTipos'}
    })
  }
  public getEstados() {
    return this.httpClient.get(this.BaseURL, {
      headers: {
        'X-Auth': this.getAuth(),
        'funcion':'getEstados'}
    })
  }
}
