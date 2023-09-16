import { Component } from '@angular/core';
import { Iitem } from './item';
import { ItemList } from '../services/item-list';

@Component({
  templateUrl: './finished.component.html',
  styleUrls: ['./item.component.css']
})
export class FinishedComponent {
  list: Iitem[] = [];
  constructor(private itemlist: ItemList) {
    this.list = this.itemlist.getDataArray();
}
onChange(): void {
  localStorage.setItem('items', JSON.stringify(this.list));
}


}
