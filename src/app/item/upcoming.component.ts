import { Component } from '@angular/core';
import { Iitem } from './item';
import { ItemList } from '../services/item-list';

@Component({
  selector: 'tl-item',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./item.component.css']
})
export class UpcomingItem {

  list: Iitem[] = [];
  constructor(private itemlist: ItemList) {
    this.list = this.itemlist.getDataArray();
  }

  onChange(): void {
    localStorage.setItem('items', JSON.stringify(this.list));
  }
}
