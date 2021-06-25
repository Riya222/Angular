import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  show: any;

  

  ngOnInit(): void {} 
   ClickButton(){
   
      this.show(alert("Form is submitted"));
  }

}
  function ClickButton() {
    throw new Error('Function not implemented.');
  }

