import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ItemContainer',
  templateUrl: './ItemContainer.component.html',
  styleUrls: ['./ItemContainer.component.css']
})
export class ItemContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  outputvalue="";
  test ="this value from parent component";
  onFormSubmit(value:string){
  this.outputvalue=value;
  }
}
