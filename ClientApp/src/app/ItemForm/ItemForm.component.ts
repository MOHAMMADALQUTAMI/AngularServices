import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../Classes/Item';
import { ItemService } from '../Item.service';

@Component({
  selector: 'app-ItemForm',
  templateUrl: './ItemForm.component.html',
  styleUrls: ['./ItemForm.component.css']
})
export class ItemFormComponent implements OnInit {
  @Input() testinput:string;
  @Output() testoutput =new EventEmitter<string>();
  item:Item=new Item ();

  constructor( private itemService:ItemService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.itemService.addOrUpdateItem(this.item);
    this.testoutput.emit("this value from child component"+ this.item.name);
    this.ResetItem();
  }
  private ResetItem(){
    this.item=new Item();
    
  }
}
