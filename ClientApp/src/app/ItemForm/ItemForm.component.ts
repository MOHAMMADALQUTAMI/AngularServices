import { Component, OnInit } from '@angular/core';
import { Item } from '../Classes/Item';
import { ItemService } from '../Item.service';

@Component({
  selector: 'app-ItemForm',
  templateUrl: './ItemForm.component.html',
  styleUrls: ['./ItemForm.component.css']
})
export class ItemFormComponent implements OnInit {
  item:Item=new Item ();

  constructor( private itemService:ItemService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.itemService.addOrUpdateItem(this.item);
    this.ResetItem();
  }
  private ResetItem(){
    this.item=new Item();
  }
}
