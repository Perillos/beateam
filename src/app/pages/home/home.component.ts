import { getTestBed } from '@angular/core/testing';
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
  public TypeList : TareasInterface[] = []
  public StateList : TareasInterface[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
     this.apiService.getTareas().subscribe((data: any) =>{
      this.TareasList = data.data;
    })
     this.apiService.getTipos().subscribe((data: any) =>{
      this.TypeList = data.data;
    })
    this.apiService.getEstados().subscribe((data: any) =>{
      this.StateList = data.data;
    })
  }
  

}
