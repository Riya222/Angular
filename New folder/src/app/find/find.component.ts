import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myFunc=()=>{
    //var input, filter, tr, td, i, tab, txtValue;
    var inputValue = (<HTMLInputElement>document.getElementById('myInput')).value;
    let input = document.getElementById("myInput");
    let filter = input!.value.toUpperCase();
    let tab = document.getElementById("tab");
    let tr = tab!.getElementsByClassName("a");
    for(let i=0; i<tr!.length; i++){
     const td =tr[i];
     if(td){
       let txtValue = td.textContent || td.innerText;
       console.log(tr[i]);
       if(txtValue!.toUpperCase().indexOf(filter)>-1){
         //tr[i].getElementsByClassName('a')[0].style.display="";
       }
       else{
        //tr[i].getElementsByClassName('a')[0].style.display="none";
       }
     }
    }
  }
}
