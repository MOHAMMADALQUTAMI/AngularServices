import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Item.service';
import { Item } from '../Classes/Item';

@Component({
  selector: 'app-ItemDetails',
  templateUrl: './ItemDetails.component.html',
  styleUrls: ['./ItemDetails.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.refreshItems();
  }
  items:Item[];
  deleteItem(name:string){
 this.itemService.deleteItem(name);
 this.refreshItems();
   }
 private refreshItems(){
   this.items =this.itemService.getItems();
 }
}
