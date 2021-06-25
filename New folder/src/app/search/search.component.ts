import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Country{
  name:string;
  flag:string;
  area:number;
  population:number;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 searchTerm: string | undefined;
 countries:Country[] | undefined;
 term:string | undefined;

  
  constructor(private http:HttpClient) { 
    
  }

  ngOnInit(): void {
    this.http.get<Country[]>('./assets/jsons/countries.json')
    .subscribe((data:Country[])=>{
      this.countries=data;
    });
   
  }
  
  
}
    



  
