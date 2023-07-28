import { Injectable } from '@angular/core';
import { Item } from './Classes/Item';

@Injectable({
providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [];
  getItems(): Item[] {
    return this.items;
  }

getItem(name:string):Item{
return this.items.find(item=> item.name === name)??new Item();
}
addOrUpdateItem(item: Item): void {
  const index = this.items.findIndex(i => i.name === item.name);
  if (index !== -1) {
    this.updateItem(index, item);
  } else {
    this.addItem(item);
  }
}
private addItem(item:Item):void{
  this.items.push(item);
}
private updateItem(index: number, item: Item):void {
    this.items[index]=item;
  }
  deleteItem(name:string):void{
    this.items =this.items.filter(item=>item.name !==name);
  }
}
