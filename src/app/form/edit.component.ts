import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Iitem } from '../item/item';
import { ItemList } from '../services/item-list';
@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./form.component.css']
})
export class Edit {
  constructor(private item: ItemList) {}
  
  edit = this.item.edit;

  add(item: any): void {
    this.item.addDataToArr(item);
  }
  onChange(): void {
    localStorage.setItem('items', JSON.stringify(this.item.dataArray));
  }
}

