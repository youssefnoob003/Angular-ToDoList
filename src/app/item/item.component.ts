import { Component } from '@angular/core';
import { Iitem } from './item';
import { ItemList } from '../services/item-list';

@Component({
  selector: 'tl-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  list: Iitem[] = [];
  constructor(private itemlist: ItemList) {
    this.list = this.itemlist.getDataArray();
  }

  onEdit(item: Iitem): void {
    this.itemlist.edit = item;
  }
  onChange(): void {
    localStorage.setItem('items', JSON.stringify(this.list));
  }

  del(): void {
    this.list = this.list.filter(item => !item.ed);
      this.onChange();
  }
  
}
