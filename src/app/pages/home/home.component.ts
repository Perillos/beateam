import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TareasInterface } from './../../models/api.interface';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public TareasList : TareasInterface[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
     this.apiService.getTareas().subscribe((data: any) =>{
      this.TareasList = data;
    })
    console.log(this.apiService.getTareas().subscribe());
  }
  

}
