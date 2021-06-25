import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
  styles:[`
  .online{
    color: white;
  }
  `]
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test Server';
  serverId:number = 10;
  serverStatus:string = 'offline';

  searchTerm: string;
  countries: Country[];
  term: string;

  
  constructor(private http: HttpClient) { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
    this.http.get<Country[]>('./assets/data/countries.json')
      .subscribe((data: Country[]) => {
        this.countries = data;
        console.log("data",data);
      });
  }
  onCreateServer(){
    if(this.serverName ===''){
      this.serverCreationStatus = 'No server was created '; 
    }
    else{

      this.serverCreationStatus = 'Server was created Name is ' + this.serverName;
    }
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus==='online'?'green':'red';
  }
}
